const {authJwt} = require("../middlewares");
const express = require("express");
const articleController = require("../controllers/articlController");
const articleRoute = express.Router();

articleRoute.get("/", articleController.getAllArticle);
articleRoute.get("/:id", articleController.getByIdArticle);
articleRoute.post("/",[authJwt.verifyToken, authJwt.isDentiste], articleController.createArticle);
articleRoute.delete("/:id",[authJwt.verifyToken, authJwt.isDentiste], articleController.deleteArticle);
articleRoute.put("/:id",[authJwt.verifyToken, authJwt.isDentiste], articleController.updateArticle)

module.exports = articleRoute