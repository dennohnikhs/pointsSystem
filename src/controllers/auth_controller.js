// login

const { Teacher } = require("../models/teacher/teacher");
const Admin = require("../models/admins/admin");
const jwt = require("jsonwebtoken");

// register

async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;
  if (!email || !password) {
    return res.json({
      message: "Please provide all details.",
      success: false,
    });
  }
  if (isAdmin) {
    const adminDetails = await Admin.validateAdmin(
      req.body.email,
      req.body.password
    );
    console.log(adminDetails);
    if (adminDetails) {
      let token = jwt.sign({ id: adminDetails.id }, process.env.JWT_SECRET, {
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
    const teacherDetails = await Teacher.validateTeacher(
      req.body.email,
      req.body.password
    );
    if (teacherDetails) {
      let token = jwt.sign({ id: teacherDetails.id }, process.env.JWT_SECRET, {
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
async function getCurrentUserById() {
  const token = req.body.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  let userId = decoded.id;
  console.log(userId);
}
module.exports = { login, getCurrentUserById };
