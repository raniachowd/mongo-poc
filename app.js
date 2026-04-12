//entry point of your backend, wires everything together (DB + routes), keeps logic out of server startup
// kept app.js minimal and only used for bootstrapping server and registering routes, following separation of concerns
const express = require("express");
require("./db");

const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const billingRoutes = require("./routes/billingRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/patients", patientRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/billing", billingRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});