const express = require("express");
const { login } = require("../../controllers/auth_controller");
const router = express.Router();

/**
 * @openapi
 * /api/login:
 *  post:
 *     tags:
 *     - Login
 *     summary: login teacher
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              isAdmin:
 *                type: boolean
 *            example:
 *              email: bwega@gmail.com
 *              password: 123456
 *              isAdmin: true
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/login", login);
module.exports = router;
