const express = require("express");
const cabinetController = require("../controllers/cabinetController");
const {authJwt}= require("../middlewares");
const cabinetRoute = express.Router();

cabinetRoute.get('/', cabinetController.getAllCabinet);
cabinetRoute.get('/:id', cabinetController.getByIdCabinet);
cabinetRoute.post('/', cabinetController.createCabinet);
cabinetRoute.delete('/:id', cabinetController.deleteCabinet);
cabinetRoute.put('/:id', cabinetController.updateCabinet);

module.exports = cabinetRoute;
