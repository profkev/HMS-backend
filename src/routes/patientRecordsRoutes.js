// src/routes/patientRecordsRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllPatients,
  updatePatient,
  deletePatient
} = require('../controllers/patientRecordsController');

// Get all patients
router.get('/patients', getAllPatients);

// Update a patient record
router.put('/patients/:patientId', updatePatient);

// Delete a patient record
router.delete('/patients/:patientId', deletePatient);

module.exports = router;
