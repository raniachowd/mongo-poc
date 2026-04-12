//demonstrates relationships in mongodb, uses ref for population, connects patients and doctors
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  date: Date
});

module.exports = mongoose.model("Appointment", appointmentSchema);