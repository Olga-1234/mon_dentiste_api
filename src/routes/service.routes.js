const express = require ("express");
const serviceController = require("../controllers/serviceController");
const serviceRoute = express.Router();
const {authJwt} = require("../middlewares")

serviceRoute.get('/', [authJwt.verifyToken, authJwt.isDentiste], serviceController.getAllService);
serviceRoute.get('/:id', [authJwt.verifyToken, authJwt.isDentiste], serviceController.getByIdService);
serviceRoute.post('/',[authJwt.verifyToken, authJwt.isDentiste], serviceController.createService);
serviceRoute.delete('/:id',[authJwt.verifyToken, authJwt.isDentiste], serviceController.deleteService);
serviceRoute.put('/:id',[authJwt.verifyToken, authJwt.isDentiste], serviceController.updateService);

module.exports = serviceRoute
