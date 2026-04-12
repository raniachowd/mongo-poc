//handles doctor CRUD logic, keeps api clean
const Doctor = require("../models/Doctor");

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};