const express = require("express");
const cabinetController = require("../controllers/cabinetController");
const {authJwt}= require("../middlewares");
const cabinetRoute = express.Router();

cabinetRoute.get('/',[authJwt.verifyToken, authJwt.isAdmin], cabinetController.getAllCabinet);
cabinetRoute.get('/:id',[authJwt.verifyToken, authJwt.isAdmin], cabinetController.getByIdCabinet);
cabinetRoute.post('/',[authJwt.verifyToken, authJwt.isAdmin], cabinetController.createCabinet);
cabinetRoute.delete('/:id',[authJwt.verifyToken, authJwt.isAdmin], cabinetController.deleteCabinet);
cabinetRoute.put('/:id',[authJwt.verifyToken, authJwt.isAdmin], cabinetController.updateCabinet);

module.exports = cabinetRoute;
