'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(250),
        allowNull: false,

      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      picture: {
        type: Sequelize.STRING(250),
        allowNull: true,

      },
      // publicationDate: {
      //   type: Sequelize.DATE,
      //   allowNull: true,

      // },
      Name: {
        type: Sequelize.STRING(250),
        allowNull: false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articles');
  }
};