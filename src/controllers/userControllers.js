const sequelize = require("sequelize");
const { User } = require("../models");
const Op = sequelize.Op;

const getUsers = async(req, res, next) => {
    await User
    .findAll()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
      res.status(500).json({ message: `${error}, une erreur dans le serveur` });
        
    })

    
//   res.status(200).send({ message: "tous les utilisateurs" });
};


const adminProfil = (req, res, next) =>{
    res.status(200).send({message: " voir profil administrateur" })
}
const dentistProfil = (req, res,next)=> {
    res.status(200).json({message: "voir profil  dentiste"})
}
const customerProfil = (req, res, next)=>{
    res.status(200).send({message: " voir  profil  client"})
}

module.exports = {
    getUsers,
    adminProfil,
    dentistProfil,
    customerProfil
}