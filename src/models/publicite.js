'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Publicite.init({
    intutile:{
  type:DataTypes.STRING(250),
  allowNull: false,
  
},

    image: {
      type: DataTypes.STRING(250),
    allowNull:false,
  }
  }, {
    sequelize,
    modelName: 'Publicite',
  });
  return Publicite;
};