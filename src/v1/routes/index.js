const express = require("express");
const pointsRoutes = require("../routes/routes");
const addStudentRouter = require("./new_student");
const login = require("./login");
const { getStudents } = require("../../controllers/studentControllers");
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
router.use(getStudents);

module.exports = router;
