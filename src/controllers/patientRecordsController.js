// src/controllers/patientRecordsController.js
const Patient = require('../models/Patient');

// View all patient records
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving patient records', error });
  }
};

// Update a specific patient record
const updatePatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body, { new: true });
    
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(400).json({ message: 'Error updating patient record', error });
  }
};

// Delete a specific patient record
const deletePatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const deletedPatient = await Patient.findByIdAndDelete(patientId);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient record deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting patient record', error });
  }
};

module.exports = {
  getAllPatients,
  updatePatient,
  deletePatient,
};
