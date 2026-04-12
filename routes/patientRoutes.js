//maps endpoints to controller functions, keeps routing layer clean
const express = require("express");
const router = express.Router();

const controller = require("../controllers/patientController");

router.post("/", controller.createPatient);
router.get("/", controller.getPatients);

module.exports = router;