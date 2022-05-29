const { authJwt } = require("../middlewares");
const express = require("express");
const { body } = require("express-validator");
const appointmentController = require("../controllers/appointmentController");
const { parse } = require("dotenv");
const formatdate = require("../utils/formatdate");
const appointmentRoute = express.Router();

appointmentRoute.get(
  "/",
  appointmentController.getAllAppointment
);
appointmentRoute.get(
  "/:id",
  [authJwt.verifyToken, authJwt.isCustomer],
  appointmentController.getByIdAppointment
);
appointmentRoute.post(
  "/",
  [authJwt.verifyToken, authJwt.isCustomer],
  appointmentController.createAppointment
);
appointmentRoute.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  appointmentController.deleteAppointment
);
appointmentRoute.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  appointmentController.updateAppointment
);

module.exports = appointmentRoute;
