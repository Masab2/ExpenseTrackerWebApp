const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handleAddExpense(req, res) {
  const { amount, date, expenseTitle, category, Notes, userId } = req.body;
  if (!amount || !date || !expenseTitle || !category || !userId) {
    console.log(userId);
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
  return res.status(200).json({ message: "Expense added successfully", expense });
}


// Get all expenses for a user
async function handleGetExpenses(req, res) {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const expenses = await prisma.expense.findMany({
    where: {
      userId: userId,
    },
  });
  return res.status(200).json({ expenses });
}

module.exports = {
  handleAddExpense,
  handleGetExpenses,
};
