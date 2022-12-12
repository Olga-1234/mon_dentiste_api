const { Article, sequelize, User } = require("../models");
const Op = sequelize.Op;

const createArticle = async (req, res, next) => {
  console.log(req.files);
  const articlE = {
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture,
    userId: req.userId,
    Name: req.body.Name,
  };

  await Article.create(articlE)
    .then((data) => {
      res.send({ message: `nouvel article ajouté ${data}` });
    })
    .catch((error) => {
      res.status(500).json({ message: `une erreur dans le serveur ${error}` });
    });
};

const getAllArticle = async (req, res, next) => {
  try {
    let article = await Article.findAll({
      include: [
        {
          model: User,
          required: true,
        },
      ],
      // limit: 2,
      // offset: 0
    });
    console.log(JSON.stringify(Article, null, 2));
    return res.send(article);
  } catch (error) {
    res.status(500).json({ message: `une erreur dans le serveur${error}` });
  }
};

const getByIdArticle = async (req, res, next) => {
  const idArticle = req.params.id;
  await Article.findByPk(idArticle)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).json({ message: `${error} une erreur dans lze serveur` });
    });
};
const deleteArticle = async (req, res, next) => {
  const idArticle = req.params.id;
  await Article.destroy({ where: { id: idArticle } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "suppression réussie" });
      } else {
        res.send({ message: "suppression échouée" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `${error} une erreur dans le serveur` });
    });
};
const updateArticle = async (req, res, next) => {
  const idArticle = req.params.id;
  await Article.update(req.body, { where: { id: idArticle } })
    .then((num) => {
      if (num == 1) {
        res.send("mise à jour réussie");
      } else {
        res.send("mise à jour échouée");
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `${error} une erreur dans le serveur` });
    });
};
const findAllPublished = (req, res, next) => {};

module.exports = {
  createArticle,
  getAllArticle,
  getByIdArticle,
  deleteArticle,
  updateArticle,
  findAllPublished,
};
