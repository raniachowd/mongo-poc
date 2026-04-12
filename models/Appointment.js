const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  doctorId: mongoose.Schema.Types.ObjectId,
  appointmentDate: Date,
  status: String,

  // embedded snapshot
  doctorName: String,
  specialty: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);