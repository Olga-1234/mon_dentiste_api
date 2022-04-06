'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabinet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cabinet.hasMany(models.UserCabinet, {
        foreignKey: "cabinetId"
      });
      Cabinet.hasMany(models.Appointment,{
        foreignKey: "cabinetId"
      } )
    }
  };
  Cabinet.init({
    name: {
      type:DataTypes.STRING(250),
    allowNull:false
  },
    email: {
      type:DataTypes.STRING(250),
      allowNull:false
  },
    website: {type:DataTypes.STRING(250),
    allowNull:true
  },
    closureTime: {
      type:DataTypes.TIME,
  allowNull:false
},
    openTime: {
      type:DataTypes.TIME,
    allowNull:false
  },
  phone: {
    type:DataTypes.STRING(250),
  allowNull:false
},
    city: {type:DataTypes.STRING(250),
      allowNull:false
    },
    address: {
      type:DataTypes.STRING(250),
    allowNull:false}
  },
   {
    sequelize,
    modelName: 'Cabinet',
  });
  return Cabinet;
};