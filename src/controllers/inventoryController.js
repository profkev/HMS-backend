const Inventory = require('../models/Inventory');

// Create a new inventory item
const createInventory = async (req, res) => {
  try {
    const { name, quantity, description, price } = req.body;

    const newItem = new Inventory({
      name,
      quantity,
      description,
      price,
    });

    await newItem.save();
    res.status(201).json(newItem);  // Send the created item back as a response
  } catch (error) {
    res.status(400).json({ message: 'Error adding item to inventory', error });
  }
};

// Get all inventory items
const getInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching inventory items', error });
  }
};

// Update inventory item (e.g., quantity or price)
const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price } = req.body;

    const updatedItem = await Inventory.findByIdAndUpdate(
      id,
      { quantity, price },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error updating inventory item', error });
  }
};

// Delete an inventory item
const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Inventory.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting inventory item', error });
  }
};

module.exports = {
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
};
