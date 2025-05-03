// src/controllers/patientController.js
const Patient = require('../models/Patient');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const { name, dateOfBirth, contact, medicalHistory } = req.body;

    // Check if all required fields are provided
    if (!name || !dateOfBirth || !contact) {
      return res.status(400).json({ message: 'Name, date of birth, and contact are required.' });
    }

    // Optional: Validate the date format or contact number here

    const newPatient = new Patient({
      name,
      dateOfBirth,
      contact,
      medicalHistory: medicalHistory || [], // Default to an empty array if medical history is not provided
    });

    await newPatient.save();
    res.status(201).json(newPatient); // Successfully created patient
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating patient', error });
  }
};

// Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    if (!patients || patients.length === 0) {
      return res.status(404).json({ message: 'No patients found.' });
    }
    res.status(200).json(patients); // Return all patients
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error retrieving patients', error });
  }
};

module.exports = {
  createPatient,
  getPatients,
};
