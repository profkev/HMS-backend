const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const Bill = require('../models/Bill');

// Controller to generate report based on type
const generateReport = async (req, res) => {
  const { reportType } = req.params;

  try {
    let reportData = [];

    if (reportType === 'patients') {
      reportData = await Patient.find();
    } else if (reportType === 'appointments') {
      reportData = await Appointment.find().populate('patientId doctorId');
    } else if (reportType === 'billing') {
      reportData = await Bill.find().populate('patientId appointmentId');
    } else {
      return res.status(400).json({ message: 'Invalid report type' });
    }

    res.status(200).json(reportData);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error });
  }
};

module.exports = {
  generateReport,
};
