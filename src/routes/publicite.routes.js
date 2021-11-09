const express = require ("express");
const pubController = require("../controllers/publiciteController");
const {authJwt} = require("../middlewares");

const pubRoute = express.Router()

pubRoute.get('/',[authJwt.verifyToken, authJwt.isAdmin], pubController.getAllPub );
pubRoute.post('/',[authJwt.verifyToken, authJwt.isAdmin], pubController.createPub);
pubRoute.get(`/:id`,[authJwt.verifyToken, authJwt.isAdmin], pubController.getByIdPub);
pubRoute.delete(`/:id`,[authJwt.verifyToken, authJwt.isAdmin], pubController.deletePub);
pubRoute.put(`/:id`,[authJwt.verifyToken, authJwt.isAdmin], pubController.updatePub);

module.exports = pubRoute;
