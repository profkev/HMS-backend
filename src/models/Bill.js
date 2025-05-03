// src/models/Bill.js
const mongoose = require('mongoose');

// Define the Bill schema
const billSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid'],
      default: 'Pending',
    },
    paymentDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Create Bill model
const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
