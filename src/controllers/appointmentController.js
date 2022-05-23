const { Appointment, User, Cabinet, sequelize } = require("../models");
const Op = sequelize.Op;
const formatdate = require("../utils/formatdate");

const createAppointment = async (req, res, next) => {
  const appointment = {
    date: req.body.date,
    time: req.body.time,
    name : req.body.name,
    email : req.body.email,
    // cabinetId: req.b

  };

  const currentDate = formatdate(new Date());
  if (new Date(appointment.date) < new Date(currentDate)) {
    res
      .status(400)
      .json({ error: "la date que vous selectionner n'est pas valide" });
  }

const  openingTime = "07:00"
const closureHour = "17:00"
  if (appointment.time < openingTime || appointment.time > closureHour) {
    res.status(400).json({error : "l'heure que vous selectionner n'est pas valide"})
  }

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
