const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /api/offense/new:
 *  post:
 *     tags:
 *     - Offense
 *     summary: add new offense
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - teacher_id
 *              - offense_type_id
 *              - student_id
 *              - comment
 *              - points_deducted
 *              - week
 *            properties:
 *              teacher_id:
 *                type: integer
 *              offense_type_id:
 *                type: integer
 *              student_id:
 *                type: integer
 *              comment:
 *                type: string
 *              points_deducted:
 *                type: integer
 *              week:
 *                type: integer
 *            example:
 *              teacher_id: 2
 *              offense_type_id: 1
 *              student_id: 8
 *              comment: last warning
 *              week: 1
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/offense/new");
module.exports = router;
