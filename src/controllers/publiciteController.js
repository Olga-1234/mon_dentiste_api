//const sequelize = require("sequelize");
const { Publicite, sequelize } = require("../models");
const Op = sequelize.Op;

const createPub = async (req, res, next) => {
  const pub = {
    intutile: req.body.intutile,
    image: req.body.image,
  };
  await Publicite.create(pub)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "une erreur se produite dans le serveur",
      });
    });
};

const getAllPub = async (req, res, next) => {
  await Publicite.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `une erreur se produite dans le serveur ${error}` });
    });
};

//
const getByIdPub = async (req, res, next) => {
  const idPub = req.params.id;

  await Publicite.findByPk(idPub)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `une erreur au niveau du serveur ${error}` });
    });
};
//

const updatePub = async (req, res, next) => {
  const idPub = req.params.id;
  await Publicite.update(req.body, {
    where: { id: idPub },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "mise à jour réussie" });
      } else {
        res.send({ message: "mise à jour echouée" });
      }
    })
    .catch((error) => {
      res
        .status(200)
        .json({ message: ` une erreur au niveau du serveur ${error}` });
    });
};
//

const deleteAllPub = async (req, res, next) => {};

const deletePub = async (req, res, next) => {
  const idPub = req.params.id;
  await Publicite.destroy({ where: { id: idPub } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "suppression réussie" });
      } else {
        res.send({ message: "suppression échouée" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `${error}une erreur dans le serveur` });
    });
};
const findAllPublished = (res, req, next) => {};
module.exports = {
  createPub,
  getAllPub,
  getByIdPub,
  updatePub,
  deleteAllPub,
  deletePub,
  findAllPublished,
};
