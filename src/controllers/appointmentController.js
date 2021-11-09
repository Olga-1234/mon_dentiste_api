const { Appointment, User, Cabinet, sequelize } = require("../models");
const Op = sequelize.Op;

const createAppointment = async (req, res, next) => {
  const appointment = {
    date: req.body.date,
    time: req.body.time,
    userId: req.userId,
    cabinetId: req.body.cabinetId,
  };

  await Appointment.create(appointment)
    .then((data) => {
      res.send({ message: `nouveau rdv ajouté ajouté ` });
    })
    .catch((error) => {
      res.status(500).json({ message: `une erreur dans le serveur ${error}` });
    });
};
const getAllAppointment = async (req, res, next) => {
  Appointment.findAll({
    include: [
      {
        model: Cabinet,
        required: true,
      },
      {
        model: User,
        required: true,
      },
    ],
  })
    .then((Appointment) => {
      res.send(Appointment);
    })
    .catch((error) => {
      res.status(500).json({ message: `une erreur dans le serveur${error}` });
    });

  //   await Appointment.findAll()

  //     .then((data) => {w

  //       res.send(data);
  //     })
};
const getByIdAppointment = async (req, res, next) => {
  const idAppointment = req.params.id;
  await Appointment.findByPk(idAppointment)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).json({ message: `${error} une erreur dans le serveur` });
    });
};
const deleteAppointment = async (req, res, next) => {
  const idAppointment = req.params.id;
  await Appointment.destroy({ where: { id: idAppointment } })
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
const updateAppointment = async (req, res, next) => {
  const idAppointment = req.params.id;
  await Appointment.update(req.body, { where: { id: idAppointment } })
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
  createAppointment,
  getAllAppointment,
  getByIdAppointment,
  deleteAppointment,
  updateAppointment,
  findAllPublished,
};
