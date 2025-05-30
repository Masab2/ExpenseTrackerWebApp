require("dotenv").config();
const express = require('express');
const body_parser = require('body-parser');
const auth_routes = require("./Routes/auth_routes");
const expense_routes = require("./Routes/expense_routes");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Endpoints
app.use("/api/auth", auth_routes);
app.use("/api/expense", expense_routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});