require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require("./src/config/db");
const monumentRouter = require('./src/api/routes/monument.router');
const countryRouter = require('./src/api/routes/country.router');
const userRouter = require('./src/api/routes/user.router');
const PORT = 3000;

const app = express();
app.disable("x-powered-by");
app.use(express.json());

connectDB();

app.use('/api/v1/monuments', monumentRouter);
app.use('/api/v1/countries', countryRouter);
app.use('/api/v1/users', userRouter);

app.use("*", async (req, res, next) => {
  return res.status(404).send("<h1>Route not found</h1>");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
