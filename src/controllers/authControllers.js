const { User, Role, UserRole,UserCabinet,Cabinet, Article,Appointment, sequelize } = require("../models");
const authConfig = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  const userInput = {
    userName: req.body.userName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    userfirstName: req.body.userfirstName,
    address: req.body.address,
    sexe: req.body.sexe,
    birthdate: req.body.birthdate,
    tel: req.body.tel, 
  };
  const roles = req.body.roles;
  const cabinets = req.body.cabinets;
  
  try {
    const user = await User.create(userInput, { transaction });

    if (roles && roles.length > 0 ) {
      for (let i = 0; i < roles.length; i++) {
        let oneRole = await Role.findOne({ where: { roleName: roles[i] } });
        if (oneRole) {
          await UserRole.create(
            { roleId: oneRole.dataValues.id, userId: user.id },
            { transaction }
          );
        }
        else {
          throw new Error("le role que vous voulez ajouter n'existe pas");
        }
      }
    } else {
      const defaultRole = await Role.findOne({
        where: { roleName: "customer" },
      });
      await UserRole.create(
        { roleId: defaultRole.id, userId: user.id },
        { transaction }
      );
    }

   if (cabinets && cabinets.length > 0) {
    for(let i = 0; i < cabinets.length; i++) {
      let oneCabinet = await Cabinet.findOne({ where: { id: cabinets[i] } });

      if (oneCabinet) {
        await UserCabinet.create(
          { cabinetId: oneCabinet.dataValues.id, userId: user.id },
          { transaction }
        );
      }
      else {
        throw new Error(`le cabinet que vous voulez ajouter n'existe pas `);
      }

    };

   }
  //  else {
  //   const defaultCabinet = await Cabinet.findOne({
  //     where: { name: "visit" },
  //   });
  //   await UserCabinet.create(
  //     { cabinetId: defaultCabinet.id, userId: user.id },
  //     { transaction }
  //   );
  // }

    await transaction.commit().then(() => {
      res.status(200).json({ message: "création du compte" });
    });
  } catch (error) {
    await transaction.rollback().then(() => {
      res
        .status(500)
        .json({ message: `l'enregistrement de l'utisateur à échouer ${error}` });
    });
  }
};

const signIn = async (req, res, next) => {
  await User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400, // 24 hours
      });

      let authorities = [];

      const userRoles = await UserRole.findAll({
        where: {
          userId: user.id,
        },
      });
    
      for (const userRole of userRoles) {
        let role = await Role.findByPk(userRole.roleId);
        authorities.push(role.roleName);
      }

      let authoritiesCabinet = [];
      const userCabinets = await UserCabinet.findAll({where: {
        userId : user.id
      }})

      for (const userCabinet of userCabinets) {
        let cabinet = await Cabinet.findByPk(userCabinet.cabinetId);
        authoritiesCabinet.push(cabinet.id);
      }

      res.status(200).send({
        id: user.id,
        userName: user.userName,
        email: user.email,
        sexe: user.sexe,
        roles: authorities,
        cabinets : authoritiesCabinet,
        accessToken: token,
        userfirstName: user.userfirstName,

        address: user.address,
        birthdate: user.birthdate,
        tel: req.body.tel,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
module.exports = {
  signIn,
  signUp,
};
