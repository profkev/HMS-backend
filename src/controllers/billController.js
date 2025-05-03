// src/controllers/billController.js
const Bill = require('../models/Bill');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');

// Controller for creating a bill
const createBill = async (req, res) => {
  try {
    const { patientId, appointmentId, amount } = req.body;

    const newBill = new Bill({
      patientId,
      appointmentId,
      amount,
      paymentStatus: 'Pending',
    });

    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(400).json({ message: 'Error creating bill', error });
  }
};

// Controller for retrieving bills of a patient
const getBills = async (req, res) => {
  try {
    const { patientId } = req.params;
    const bills = await Bill.find({ patientId }).populate('appointmentId');

    if (bills.length === 0) {
      return res.status(404).json({ message: 'No bills found for this patient.' });
    }

    res.status(200).json(bills);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving bills', error });
  }
};

// Controller for updating the payment status of a bill
const updateBill = async (req, res) => {
  try {
    const { billId } = req.params;
    const { paymentStatus, paymentDate } = req.body;

    const bill = await Bill.findByIdAndUpdate(
      billId,
      { paymentStatus, paymentDate },
      { new: true }
    );

    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    res.status(200).json(bill);
  } catch (error) {
    res.status(400).json({ message: 'Error updating bill', error });
  }
};

module.exports = {
  createBill,
  getBills,
  updateBill,
};
