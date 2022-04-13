const Jwt = require("jsonwebtoken");
const secret = require("../config/auth.config");
const { User, Role, UserRole } = require("../models");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(403).send({ message: "le token est vide" });
  } //verifyToken
  Jwt.verify(token, secret.secret, (error, decoded) => {
    if (error) {
      res.status(401).send({ message: "token n'existe pas" });
    }

    req.userId = decoded.id;
  });
  next();
};

const isAdmin = async (req, res, next) => {
  await User.findByPk(req.userId).then(async (user) => {
    const userRoles = await UserRole.findAll({
      where: {
        userId: user.id,
      },
    });

    for (const userRole of userRoles) {
      let role = await Role.findByPk(userRole.roleId);
      if (role.roleName === "admin") {
        next();
        return;
      }
    }
    res.status(403).send({ message: "tu n'es pas administrateur" });
    return;
  });
};

const isCustomer = async (req, res, next) => {
  await User.findByPk(req.userId).then(async (user) => {
    const userRoles = await UserRole.findAll({ where: { userId: user.id } });
    for (const userRole of userRoles) {
      let role = await Role.findByPk(userRole.roleId);
      if (
        role.roleName === "admin" ||
        role.roleName === "dentiste" ||
        role.roleName === "customer"
      ) {
        next();
        return;
      }
    }
    res.status(403).send({ message: "require User Role" });
    return;
  });
};

const isDentiste = async (req, res, next) => {
  await User.findByPk(req.userId).then(async (user) => {
    const userRoles = await UserRole.findAll({ where: { userId: user.id } });
    for (const userRole of userRoles) {
      let role = await Role.findByPk(userRole.roleId);
      if (role.roleName === "admin" || role.roleName === "dentiste") {
        next();
        return;
      }
    }
    res.status(403).send({ message: "require dentiste Role" });
    return;
  });
};

module.exports = {
  isAdmin,
  isDentiste,
  isCustomer,
  verifyToken,
};
