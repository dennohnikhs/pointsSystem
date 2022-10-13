const express = require("express");
const pointsRoutes = require("../routes/routes");
const addStudentRouter = require("./new_student");
const login = require("./login");
const swaggerRoutes = require("../../../swagger");
const router = express.Router();

/**
 * @openapi
 * /Healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get("/healthcheck", (req, res) => res.sendStatus(200));
router.use(pointsRoutes);
router.use(addStudentRouter);
router.use(login);
router.use(swaggerRoutes);

module.exports = router;
