const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handleAddExpense(req, res) {
  const { amount, date, expenseTitle, category, Notes, userId } = req.body;
  if (!amount || !date || !expenseTitle || !category || !userId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const expense = await prisma.expense.create({
    data: {
      amount: amount,
      date: date,
      expenseTitle: expenseTitle,
      category: category,
      Notes: Notes,
      userId: userId,
    },
  });
  return res
    .status(200)
    .json({ message: "Expense added successfully", expense });
}

// Get all expenses for a user
async function handleGetExpenses(req, res) {
  const { userId } = req.query;
  try {
    const expenses = await prisma.expense.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    return res.status(200).json({ expenses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Edit an expense
async function handleEditExpense(req, res) {
  try {
    const { id, amount, date, expenseTitle, category, Notes} = req.body;
    if (!id) {
      console.log(id);
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(id);
    const expense = await prisma.expense.update({
      where: {
        id: parseInt(id),
      },
      data: {
        amount: amount,
        date: date,
        expenseTitle: expenseTitle,
        category: category,
        Notes: Notes,
      },
    });
    return res
      .status(200)
      .json({ message: "Expense updated successfully", expense });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Delete an expense
async function handleDeleteExpense(req, res) {
  try {
    const { id} = req.query;
    console.log(id);
    if (!id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await prisma.expense.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res
      .status(200)
      .json({ message: "Expense deleted successfully"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleAddExpense,
  handleGetExpenses,
  handleEditExpense,
  handleDeleteExpense,
};
