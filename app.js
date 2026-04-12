const express = require("express");
require("./db");

const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");
const Billing = require("./models/Billing");

const app = express();
app.use(express.json());


// Create Patient
app.post("/patients", async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
});


// Create Doctor
app.post("/doctors", async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
});


// Create Appointment
app.post("/appointments", async (req, res) => {
  const doctor = await Doctor.findById(req.body.doctorId);

  const appointment = await Appointment.create({
    ...req.body,
    doctorName: doctor.name,
    specialty: doctor.specialty
  });

  res.json(appointment);
});


// Revenue Aggregation
app.get("/revenue", async (req, res) => {
  const result = await Billing.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amount" }
      }
    }
  ]);

  res.json(result);
});


// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/patients", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.get("/doctors", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});