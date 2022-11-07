const express = require("express");
const { getCurrentUserById } = require("../../controllers/auth_controller");
const router = express.Router();

router.get("/api/current-user", getCurrentUserById);
module.exports = router;
