// src/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route to schedule a new appointment
router.post('/', appointmentController.createAppointment);

// Route to get all appointments
router.get('/', appointmentController.getAllAppointments);

module.exports = router;
