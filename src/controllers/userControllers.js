const allUsers = (req, res, next) => {
  res.status(200).send({ message: "tous les utilisateurs" });
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
    allUsers,
    adminProfil,
    dentistProfil,
    customerProfil
}