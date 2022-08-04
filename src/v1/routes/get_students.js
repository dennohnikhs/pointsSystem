/**
 * @swagger
 *  components:
 *   schema:
 *     Students:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 name:
 *                    type: string
 *                 class:
 *                    type: integer
 *                 admission_number:
 *                    type: integer
 *                 stream:
 *                    type: string
 *      example:
 *            name: William Ruto
 *            admission_number: C5454
 *            class: 2
 *            stream: C
 */

/**
 * @swagger
 * components:
 *  schema:
 *      studentsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of students"
 *              students:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Students'
 *
 */

/**
 * @openapi
 * /api/students:
 *  get:
 *     tags:
 *     - Students
 *     summary: Get all Students
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *            type: string
 *         required: false
 *         description: get student's name
 *       - in: query
 *         name: admission_number
 *         schema:
 *            type: string
 *         required: false
 *         description: get students's admission number
 *       - in: query
 *         name: class
 *         schema:
 *            type: integer
 *         required: false
 *         description: get students's class
 *       - in: query
 *         name: stream
 *         schema:
 *            type: string
 *         required: false
 *         description: get student's stream
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/studentsResponse'  

 *       400:
 *         description: Bad request
 */
