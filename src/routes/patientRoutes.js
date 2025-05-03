// src/routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const { createPatient, getPatients } = require('../controllers/patientController');

// Route to create a new patient
router.post('/', createPatient);

// Route to get all patients
router.get('/', getPatients);

module.exports = router;
