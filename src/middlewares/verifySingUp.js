const { Role, User, UserRole } = require("../models");

const checkDuplicateEmail = async (req, res, next) => {
  const emailUser = req.body.email;
  await User.findOne({ where: { email: emailUser } }).then((user) => {
    if (user) {
      res.status(400).send({ message: `le mail existe deja` });
    }
  });
  next();
};

const checkRoleExist = async (req, res, next) => {
  const roles = req.body.roles;

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      let role = await Role.findOne({ where: { roleName: roles[i] } });
      if (!role) {
        res.status(400).send({ message: "votre role n'existe pas" });
      }
    }
  }
  next();
};

module.exports = { checkDuplicateEmail, checkRoleExist };
