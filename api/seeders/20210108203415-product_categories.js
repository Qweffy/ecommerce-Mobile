"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert("product_categories", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: "3",
        productId: "1",
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: "2",
        productId: "3",
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: "5",
        productId: "4",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
