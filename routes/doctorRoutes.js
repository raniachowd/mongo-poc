//maps endpoints to controller functions, keeps routing layer clean
const express = require("express");
const router = express.Router();

const controller = require("../controllers/doctorController");

router.post("/", controller.createDoctor);
router.get("/", controller.getDoctors);

module.exports = router;