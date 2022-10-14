async function validateAddTeacher(req) {
  if (!req.body.name) {
    return {
      isValid: false,
      message: "name is required.",
    };
  }

  if (!req.body.email) {
    return {
      isValid: false,
      message: "Email is required",
    };
  }
  if (!req.body.role) {
    return {
      isValid: false,
      message: "Role of the teacher is required",
    };
  }
  if (!req.body.phone_number) {
    return {
      isValid: false,
      message: "wrong phone_number format",
    };
  }

  if (!req.body.password) {
    return {
      isValid: false,
      message: "password is required.",
    };
  }
  if (typeof req.body.name !== "string") {
    return {
      isValid: false,
      message: "name cannot be a number",
    };
  }
  const studentExists = await Teacher.exists(req.body.email);
  if (studentExists) {
    return {
      isValid: false,
      message: "Teacher details exists,please add new teacher",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = {
  validateAddTeacher,
};
