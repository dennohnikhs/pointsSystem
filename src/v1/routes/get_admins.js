/**
 * @swagger
 *  components:
 *   schema:
 *     Admins:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 name:
 *                    type: string
 *                 phone_number:
 *                    type: string
 *                 email:
 *                    type: string
 *                 password:
 *                    type: string
 *      example:
 *            name: Martha karua
 *            phone_number: "0723664765"
 *            email: 1234@example.com
 *            password: C56fghrt*
 */

/**
 * @swagger
 * components:
 *  schema:
 *      adminsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of admins"
 *              admins:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Admins'
 *
 */

/**
 * @openapi
 * /api/admins:
 *  get:
 *     tags:
 *     - Admins
 *     summary: Get all Admins
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *            type: string
 *         required: false
 *         description: get admins's name
 *       - in: query
 *         name: phone_number
 *         schema:
 *            type: string
 *         required: false
 *         description: get admins's phone number
 *       - in: query
 *         name: email
 *         schema:
 *            type: string
 *         required: false
 *         description: get admins's email
 *       - in: query
 *         name: password
 *         schema:
 *            type: string
 *         required: false
 *         description: get admins password
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/adminsResponse'  

 *       400:
 *         description: Bad request
 */
