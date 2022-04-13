const sequelize = require("sequelize");
const { Cabinet } = require("../models");
const Op = sequelize.Op;

const createCabinet = async (req, res, next) => {
  const cab = {
    name: req.body.name,
    email: req.body.email,
    phone : req.body.phone,
    Description : req.body.Description,
    service : req.body.service,
    closureTime: req.body.closureTime,
    openTime: req.body.openTime,
    city: req.body.city,
    address: req.body.address,
  };
  await Cabinet
    .create(cab)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).json({ message: `${error}, une erreur dans le serveur` });
    });
};

const getAllCabinet = async (req, res, next) => {
  await Cabinet
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).json(`${error}, une erreur dans le serveur`);
    });
};

const getByIdCabinet =async (req, res, next) => {
  const idCabinet = req.params.id;
  await Cabinet
    .findByPk(idCabinet)
    .then((data) => {
      res.send(data);
    })
    .catch((error)=>{
    res.status(500).json({message: `une erreur au niveau du serveur ${error}`})
    });
};


const updateCabinet = async (req, res, next) => {
  const idCabinet = req.params.id;
  await Cabinet.update(req.body, { where: { id: idCabinet } })
  .then((num)=>{
      if (num==1){
          res.send({message:"mise  jour réussie"})
      }
      else{
          res.send({message: "mise à échouée"})
      }
  })
  .catch((error)=>{
      res.status(500).json(`${error}, une erreur dans le serveur`)
  })
};

const deleteCabinet = async (req, res, next) => {
    const idCabinet = req.params.id;

    await Cabinet.destroy( {where : {id: idCabinet}})
    .then((num)=>{
        if (num==1) {
        res.send({message: " la suppression a réussie"})
            
        }
        else{
            res.send({message: "la suppression à échouée"})
        }
    })
    .catch((error)=>{
        res.status(500).json({message :`${error}, une erreur dans le serveur`})
    })
};
const findAllPublished = (req, res, next) => {};

module.exports = {
  createCabinet, 
  getAllCabinet,
  getByIdCabinet,
  updateCabinet,
  deleteCabinet,
  findAllPublished,
};
