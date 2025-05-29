require("dotenv").config();
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});