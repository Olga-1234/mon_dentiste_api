"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleName: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "dentiste",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
