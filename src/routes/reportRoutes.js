const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/reportController');

// Route to generate reports based on type (patients, appointments, billing)
router.get('/generate-report/:reportType', generateReport);

module.exports = router;
