const jwt = require("jsonwebtoken");
const isIgnored = require("../utils/unprotected");

async function protect(req, res, next) {
  if (isIgnored(req.url)) {
    return next();
  }
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;
      console.log(userId);

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
