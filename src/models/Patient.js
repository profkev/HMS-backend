// src/models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: [String], // Array of strings for storing medical history details
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
