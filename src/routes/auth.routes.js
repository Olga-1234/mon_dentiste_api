const express = require("express");
const authRoute = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authControllers");
const { verifySingUp } = require("../middlewares");

authRoute.post(
  "/signUp",
  [
    verifySingUp.checkDuplicateEmail,
    verifySingUp.checkRoleExist,
    body("userName", "le champs userName ne dois pas etre vide").isEmpty(),
    body(
      "userfirstName",
      "le champ userfirstName ne dois pas etre vide"
    ).isEmpty(),
    body("password", "le champs password ne dois pas etre vide").isEmpty(),
    body("email", "le mail n'est pas valide").isEmail(),
    body("sexe").custom((value) => {
      if (!(value == "M" || value == "F")) {
        throw new error("le sexe doit etre f ou m");
      }
    }),
  ],
  authController.signUp
);
authRoute.post("/signIn", authController.signIn);

module.exports = authRoute;
