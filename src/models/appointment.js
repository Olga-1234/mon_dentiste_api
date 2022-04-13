"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Cabinet, {
        foreignKey: "cabinetId"
      });
      Appointment.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  Appointment.init(
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      
      cabinetId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
