// src/models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',  // Assuming you have a Doctor model too
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Scheduled', // Can be "Scheduled", "Completed", "Cancelled"
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
