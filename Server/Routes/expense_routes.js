const { handleAddExpense, handleGetExpenses, handleEditExpense, handleDeleteExpense } = require("../Controllers/add_expense_controller");

const router = require("express").Router();

// Add Expense API
router.post("/add", handleAddExpense);

// Get Expenses API
router.get("/get", handleGetExpenses);

// Edit Expense API
router.put("/edit", handleEditExpense);

// Delete Expense API
router.delete("/delete", handleDeleteExpense);

module.exports = router;
