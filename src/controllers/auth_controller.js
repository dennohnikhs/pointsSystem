// login

const { Teacher } = require("../models/teacher/teacher");
const Admin = require("../models/admins/admin");
const jwt = require("jsonwebtoken");

// register

async function login(req, res) {
  const { email, password, isAdmin } = req.body;
  if (!email || !password) {
    return res.json({
      message: "Please provide all details.",
      success: false,
    });
  }
  if (isAdmin) {
    const adminDetails = await Admin.validateAdmin(email, password);
    if (adminDetails) {
      let token = jwt.sign({ adminDetails }, process.env.JWT_SECRET, {
        expiresIn: "5d",
      });
      return res.send({
        success: true,
        message: "Admin login successful",
        token: token,
      });
    } else {
      return res.json({
        message: "Invalid email or password",
        success: false,
      });
    }
  } else {
    const teacherDetails = await Teacher.validateTeacher(email, password);
    if (teacherDetails) {
      let token = jwt.sign({ teacherDetails }, process.env.JWT_SECRET, {
        expiresIn: "5d",
      });
      return res.send({
        success: true,
        message: "Teacher login successful",
        token: token,
      });
    } else {
      return res.json({
        message: "Invalid email or password",
        success: false,
      });
    }
  }
}

module.exports = { login };
