const Doctor = require('../models/Doctor');

// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const { name, specialty, contact } = req.body;

    const newDoctor = new Doctor({
      name,
      specialty,
      contact,
    });

    await newDoctor.save();
    res.status(201).json(newDoctor); // Successfully created doctor
  } catch (error) {
    res.status(400).json({ message: 'Error creating doctor', error });
  }
};

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors); // Return all doctors
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving doctors', error });
  }
};

module.exports = {
  createDoctor,
  getDoctors,
};
