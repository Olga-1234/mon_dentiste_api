const express = require("express");
const authRoute = express.Router();
const authController = require("../controllers/authControllers");
const { verifySingUp } = require("../middlewares");

authRoute.post("/signUp",[verifySingUp.checkDuplicateEmail, verifySingUp.checkRoleExist],authController.signUp);
authRoute.post("/signIn", authController.signIn);

module.exports = authRoute;
