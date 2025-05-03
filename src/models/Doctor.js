const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
