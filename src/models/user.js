"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.UserRole, {
        foreignKey: "userId",
      });

      User.hasMany(models.Article, {
        foreignKey: "userId",
      });
      User.hasMany(models.UserCabinet, {
        foreignKey: "userId",
      });
      // User.hasMany(models.Belong, {
      //   foreignKey: "userId",
      // });
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      userfirstName: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      sexe: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
