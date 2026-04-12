//maps endpoints to controller functions, keeps routing layer clean
const express = require("express");
const router = express.Router();

const controller = require("../controllers/billingController");

router.get("/revenue", controller.getRevenue);

module.exports = router;