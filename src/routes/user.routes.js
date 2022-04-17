const express = require("express");
const userRouter = express.Router();
const { authJwt } = require("../middlewares");
const userController = require("../controllers/userControllers");

userRouter.get("/allUser",[authJwt.verifyToken, authJwt.isAdmin],  userController.getUsers);
userRouter.get("/adminProfil",[authJwt.verifyToken, authJwt.isAdmin],userController.adminProfil);
userRouter.get("/customerProfil",[authJwt.verifyToken, authJwt.isCustomer],userController.customerProfil);
userRouter.get("/denstisteProfil",[authJwt.verifyToken, authJwt.isDentiste],userController.dentistProfil);

module.exports = userRouter;
