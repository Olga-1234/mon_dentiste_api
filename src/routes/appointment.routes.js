const { authJwt } = require("../middlewares");
const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const appointmentRoute = express.Router();

appointmentRoute.get("/",[authJwt.verifyToken, authJwt.isCustomer], appointmentController.getAllAppointment);
appointmentRoute.get("/:id",[authJwt.verifyToken, authJwt.isCustomer], appointmentController.getByIdAppointment);
appointmentRoute.post("/",[authJwt.verifyToken, authJwt.isCustomer], appointmentController.createAppointment);
appointmentRoute.delete("/:id",[authJwt.verifyToken, authJwt.isCustomer], appointmentController.deleteAppointment);
appointmentRoute.put("/:id", [authJwt.verifyToken, authJwt.isCustomer], appointmentController.updateAppointment);

module.exports = appointmentRoute;
