const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /api/offence-type/new:
 *  post:
 *     tags:
 *     - Offence-type
 *     summary: add new offence type
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - points
 *            properties:
 *              name:
 *                type: string
 *              points:
 *                type: integer
 *            example:
 *              name: cheating
 *              points: 10
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/offence-type/new");
module.exports = router;
