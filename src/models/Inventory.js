const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  dateAdded: { type: Date, default: Date.now },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
