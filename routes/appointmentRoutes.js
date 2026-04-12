//maps endpoints to controller functions, keeps routing layer clean
const express = require("express");
const router = express.Router();

const controller = require("../controllers/appointmentController");

router.post("/", controller.createAppointment);
router.get("/", controller.getAppointments);

module.exports = router;