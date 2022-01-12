const express = require("express");
const resetPwdRoute = express.Router();
const resetPwdController = require("../controllers/resetPwdController");

resetPwdRoute.get('/', resetPwdController.resetPwd);


module.exports = resetPwdRoute;
