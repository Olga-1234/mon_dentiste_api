"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCabinet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCabinet.belongsTo(models.Cabinet, {
        foreignKey: "cabinetId",
      });
      UserCabinet.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  UserCabinet.init(
    {
      cabinetId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserCabinet",
    }
  );
  return UserCabinet;
};
