const express = require('express');
const router = express.Router();
const {
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} = require('../controllers/inventoryController');

// Route to add a new inventory item
router.post('/', createInventory);

// Route to get all inventory items
router.get('/', getInventory);

// Route to update an inventory item (quantity or price)
router.put('/:id', updateInventory);

// Route to delete an inventory item
router.delete('/:id', deleteInventory);

module.exports = router;
