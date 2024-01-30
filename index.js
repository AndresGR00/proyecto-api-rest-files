require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require('./src/config/db')
const PORT = 3000;

const app = express();
app.disable("x-powered-by");
app.use(express.json());

connectDB();

app.use("*", async (req, res, next) => {
  return res.status(404).send("<h1>Route not found</h1>");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
