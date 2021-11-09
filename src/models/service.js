'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.hasMany(models.CabinetService,
        {
          foreignKey: "serviceId"
        })
    }
  };
  Service.init({
    name: {
      type:DataTypes.STRING(250),
    allowNull:false
  },
    description: {
      type:DataTypes.TEXT,
    allowNull: false}
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};