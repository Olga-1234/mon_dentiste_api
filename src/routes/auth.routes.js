const express = require("express");
const authRoute = express.Router();
const authController = require("../controllers/authControllers");

authRoute.get("/signIn", authController.singIn);
authRoute.get("/signUp", authController.signUp);

module.exports = authRoute;
