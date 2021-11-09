const {authJwt} = require("../middlewares");
const express = require("express");
const articleController = require("../controllers/articlController");
const articleRoute = express.Router();

articleRoute.get("/", articleController.getAllArticle);
articleRoute.get("/:id", articleController.getByIdArticle);
articleRoute.post("/", articleController.createArticle);
articleRoute.delete("/:id", articleController.deleteArticle);
articleRoute.put("/:id", articleController.updateArticle)

module.exports = articleRoute