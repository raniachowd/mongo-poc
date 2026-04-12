//shows real-world relational querying, uses populate(), combines multiple models/Appointment
//uses mongoose populate to simulate relational joins between patients and doctors
const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

exports.createAppointment = async (req, res) => {
  const doctor = await Doctor.findById(req.body.doctorId);

  const appointment = await Appointment.create({
    patientId: req.body.patientId,
    doctorId: req.body.doctorId,
    date: req.body.date
  });

  res.json({
    appointment,
    doctorName: doctor.name,
    specialty: doctor.specialty
  });
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patientId")
    .populate("doctorId");

  res.json(appointments);
};