const { Teacher } = require("../models/teacher/teacher");
const {
  validateAddTeacher,
} = require("../utils/validator/validate_add_teachers");
const bcrypt = require("bcryptjs");

async function addTeacher() {
  try {
    const validationResult = await validateAddTeacher(req);
    if (!validationResult.isValid) {
      return res.json({
        success: false,
        error_message: validationResult.message,
      });
    }
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("akgh");
    await Teacher.addOne(
      req.body.name,
      req.body.phone_number,
      req.body.email,
      req.body.role,
      hashedPassword
    );
    return res.json({
      success: true,
      success_message: "Teacher added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add  teacher");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add new teacher.",
      });
    }
  }
}
module.exports = addTeacher;
