"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert("categories", [
      {
        name: "Iphone",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Huawei",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xiaomi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blackview",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("categories", null, {});
  },
};
