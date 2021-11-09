const sequelize = require("sequelize");
const {Service} = require("../models");
const Op = sequelize.Op;

const createService= async(req, res, next)=>{
const servicE={
    name: req.body.name,
    description: req.body.description
};
await Service.create(servicE)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
    res.status(500).send({message: `${error}, une erreur dans le serveur`})
    })
};
const getAllService= async (req, res, next)=>{
 await Service.findAll()
 .then((data)=>{
     res.send(data);
 })
 .catch((error)=>{
     res.status(500).json({message : `une erreur se produitre dans le serveur`})
 })
};
// 
const getByIdService= async (req, res, next)=>{
    const idService = req.params.id
    await Service.findByPk(idService)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(500).json({message: `une error dans le serveur ${error}`})
    })
};
const deleteService= async(req, res, next)=>{
const idService= req.params.id
await Service.destroy({where : {id : idService}})
.then((num)=>{
    if(num==1){
        res.send({message: `suppression réussie`})
    }
    else {
        res.send({message: `suppression échouée`})
    }
})
.catch((error)=>{
    res.status(500).json({message: `${error} une erreur dans le serveur`})
})
};

const updateService= async(req, res, next)=>{
    const idService = req.params.id
    await Service.update(req.body, {where : {id: idService}})
    .then((num)=>{
        if (num==1){
            res.send({message: "mise à jour réussie"})
        }
        else{
            res.send({message: "mise à jour echouée"})
        }
    })
    .catch((error)=>{
        res.status(500).json({ message: `${error} une erreur dans le serveur`})
    })
};
const findAllPublished=(req, res, next)=>{};

module.exports= {
    createService,
    getAllService,
    getByIdService,
    deleteService,
    updateService,
    findAllPublished
}
