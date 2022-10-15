const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /api/admin/new:
 *  post:
 *     tags:
 *     - Admin
 *     summary: add new admin
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - phone_number
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *              phone_number:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              name: Junet Mohammed
 *              phone_number: "07898787898"
 *              email: 45678gjdu@gmail.com
 *              password: Btuyt564*&
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/admin/new", addAdmin);
module.exports = router;
