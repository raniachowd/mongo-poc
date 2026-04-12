// holds business logic, keeps routes clean, makes code reusable and testable
const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};