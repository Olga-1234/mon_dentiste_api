const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userControllers");

userRouter.get("/", userController.allUsers);
userRouter.get("/adminProfil", userController.adminProfil);
userRouter.get("/customerProfil", userController.customerProfil);
userRouter.get("/denstistProfil", userController.dentistProfil);

module.exports = userRouter
