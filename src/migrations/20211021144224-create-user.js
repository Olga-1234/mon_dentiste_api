'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },


      userfirstName: {
        type: Sequelize.STRING(250),
        allowNull: false,

      },
      address: {
        type: Sequelize.STRING(250),
        allowNull: false,

      },
      sexe:{
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      birthdate:{
        type: Sequelize.DATE,
        allowNull: false,

      },
      tel :{
        type: Sequelize.INTEGER,
        allowNull: false,
      },


      email: {
        type: Sequelize.STRING(250),
        allowNull:false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
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
    await queryInterface.dropTable('Users');
  }
};