// src/controllers/adminController.js
const AdminSettings = require('../models/AdminSettings');

// Update admin settings
const updateSettings = async (req, res) => {
  try {
    const { settingKey, value } = req.body;

    const updatedSetting = await AdminSettings.findOneAndUpdate(
      { settingKey },
      { value },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(400).json({ message: 'Error updating settings', error });
  }
};

module.exports = {
  updateSettings,
};
