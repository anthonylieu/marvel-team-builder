const express = require("express");
const router = express.Router();
const path = require("path");
const sequelize = require("../config/connection");

const myMiddlewareFunction = (req, res, next) => {
  // Your middleware code goes here
  // ...

  // Call next to pass control to the next middleware function or route handler
  next();
};

module.exports = myMiddlewareFunction;
