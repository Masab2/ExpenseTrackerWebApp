const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handleRegisterUser(req, res) {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return res
    .status(201)
    .json({ message: "User registered successfully", user });
}

// Handle login
async function handleLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }

  return res.status(200).json({ message: "Login successful" });
}

module.exports = {
  handleRegisterUser,
};
