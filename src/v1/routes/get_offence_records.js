/**
 * @swagger
 *  components:
 *   schema:
 *     Offences:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 teacher_id:
 *                    type: integer
 *                 offence_type_id:
 *                    type: integer
 *                 student_id:
 *                    type: integer
 *                 comment:
 *                    type: string
 *                 points_deducted:
 *                    type: integer
 *                 week:
 *                    type: integer
 *      example:
 *            teacher_id: 5
 *            offence_type_id: 3
 *            student_id: 2
 *            comment: suspension
 *            points_deducted: 5
 *            week: 4
 */

/**
 * @swagger
 * components:
 *  schema:
 *      offenceResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of recorded offences"
 *              offences:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Offences'
 *
 */

/**
 * @openapi
 * /api/offences:
 *  get:
 *     tags:
 *     - Offences
 *     summary: Get all offences
 *     parameters:
 *       - in: query
 *         name: week
 *         schema:
 *            type: integer
 *         required: false
 *         description: get offence based on week of occurrence 
 *       - in: query
 *         name: comment
 *         schema:
 *            type: string
 *         required: false
 *         description: get students's based on comments given on offence committed
 *       - in: query
 *         name: teacher name
 *         schema:
 *            type: string
 *         required: false
 *         description: get teacher who got student committing the offence
 *       - in: query
 *         name: offence type name
 *         schema:
 *            type: string
 *         required: false
 *         description: get student's offence type name
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/offenceResponse'  

 *       400:
 *         description: Bad request
 */
