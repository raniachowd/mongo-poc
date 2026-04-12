const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Patient", patientSchema);