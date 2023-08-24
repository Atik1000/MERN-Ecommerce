const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Rate limit exceeded",
});

app.use(rateLimiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.use("/api/users", userRouter);

module.exports = app;
