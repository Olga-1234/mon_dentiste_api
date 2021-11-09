'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CabinetService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CabinetService.belongsTo(models.Cabinet, {
        foreignKey: "cabinetId"
      });
      CabinetService.belongsTo(models.Service, {
        foreignKey: "serviceId"
      })
    }
  };
  CabinetService.init({
    cabinetId: {
      type:DataTypes.INTEGER,
    allowNull:false
  },
    serviceId: {
      type:DataTypes.INTEGER,
    allowNull:false
  }
  }, {
    sequelize,
    modelName: 'CabinetService',
  });
  return CabinetService;
};