'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },

      cabinetId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Cabinets",
          key: "id",
          as: "cabinetId",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};