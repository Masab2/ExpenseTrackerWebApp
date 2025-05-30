const { handleAddExpense, handleGetExpenses } = require("../Controllers/add_expense_controller");

const router = require("express").Router();

// Add Expense API
router.post("/add", handleAddExpense);

// Get Expenses API
router.post("/get", handleGetExpenses);

module.exports = router;