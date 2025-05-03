// src/routes/billingRoutes.js
const express = require('express');
const router = express.Router();
const {
  createBill,
  getBills,
  updateBill,
} = require('../controllers/billController');

// Route to create a bill when an appointment is scheduled
router.post('/', createBill);

// Route to get all bills for a patient
router.get('/:patientId', getBills);

// Route to mark a bill as paid
router.put('/:billId', updateBill);

module.exports = router;
