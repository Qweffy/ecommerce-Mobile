"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert("orders", [
      {
        price: "2270",
        state: "cart",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
      },
      {
        price: "309",
        state: "cart",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "3",
      },
      {
        price: "1797",
        state: "cart",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "5",
      },
      {
        price: "1",
        state: "cart",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "5",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("orders", null, {});
  },
};
