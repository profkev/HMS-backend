// src/models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportType: {
    type: String,
    required: true,
    enum: ['patient', 'appointment', 'billing'], // Types of reports
  },
  content: {
    type: String,
    required: true, // This could be JSON or a structured text format
  },
  generatedAt: {
    type: Date,
    default: Date.now, // Store the date of report generation
  },
  generatedBy: {
    type: String,
    required: true, // Admin who generated the report
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
