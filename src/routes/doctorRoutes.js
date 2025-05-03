const express = require('express');
const router = express.Router();
const { createDoctor, getDoctors } = require('../controllers/doctorController');

// Route to create a new doctor (POST)
router.post('/', createDoctor);

// Route to get all doctors (GET)
router.get('/', getDoctors);

module.exports = router;
