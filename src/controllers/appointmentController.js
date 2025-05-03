// src/controllers/appointmentController.js
const Appointment = require('../models/Appointment');

// Controller to create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, appointmentDate, reason } = req.body;

    // Validate required fields
    if (!patientId || !doctorId || !appointmentDate || !reason) {
      return res.status(400).json({ message: 'All fields (patientId, doctorId, appointmentDate, reason) are required.' });
    }

    // Create new appointment
    const newAppointment = new Appointment({
      patientId,
      doctorId,
      appointmentDate,
      reason,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment); // Successfully created appointment
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error scheduling appointment', error });
  }
};

// Controller to get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patientId doctorId');
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found.' });
    }
    res.status(200).json(appointments); // Return all appointments
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error retrieving appointments', error });
  }
};
