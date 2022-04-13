"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      picture: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      // publicationDate:
      // {type: DataTypes.DATE,
      // allowNull: false},
      Name: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
