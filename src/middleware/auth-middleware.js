const jwt = require("jsonwebtoken");

async function protect(req, res, next) {
  if (req.url == "/api/login" || req.url == "/docs" || req.originalUrl == "/") {
    return next();
  }
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } else {
      return res.status(400).json({
        message: "User not authorized",
        success: false,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Failed to authenticate teacher",
      success: false,
      error,
    });
  }
}
module.exports = protect;

// async function protect(req, res, next) {
//   try {
// if (
//   req.headers.authorization &&
//   req.headers.authorization.startsWith("Bearer")
// ) {
//   token = req.header.authorization.split(" ")[1];
//   jwt.verify(token, process.env.JWT_SECRET);
//   req.user = await Teacher.validateTeacher(teacherDetails.id); // find teacher with userDetails.id
//   next();
// }
//   } catch (error) {
//     res.status(404).json({
//       message: "User not found.",
//     });
//   }
// }
// function isAdmin(req, res, next) {
//   if (req.user && req.user.role === ADMIN) {
//     next();
//   } else {
//     res.status(403).json({
//       message: "you are not authorized  as an admin!",
//     });
//   }
// }
