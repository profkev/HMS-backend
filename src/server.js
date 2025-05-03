// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Importing routes
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const billRoutes = require('./routes/billRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes'); // Inventory routes
const reportRoutes = require('./routes/reportRoutes'); // Report routes
const adminRoutes = require('./routes/adminRoutes'); // Admin settings routes
const patientRecordsRoutes = require('./routes/patientRecordsRoutes'); // Patient records routes

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

// Test Route
app.get('/', (req, res) => {
  res.send('Hospital Management System API is running');
});

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/bills', billRoutes);
app.use('/api/inventory', inventoryRoutes); // Inventory route
app.use('/api/reports', reportRoutes);
app.use('/api/patient-records', patientRecordsRoutes); // Manage patient records
app.use('/api/admin', adminRoutes); // Admin settings

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
