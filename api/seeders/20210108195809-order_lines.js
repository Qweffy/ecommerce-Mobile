"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert("order_lines", [
      {
        price: "820",
        count: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: "1",
        productId: "1",
      },
      {
        price: "630",
        count: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: "1",
        productId: "2",
      },
      {
        price: "309",
        count: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: "2",
        productId: "4",
      },
      {
        price: "599",
        count: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: "3",
        productId: "3",
      },
      {
        price: "599",
        count: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: "4",
        productId: "3",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("order_lines", null, {});
  },
};
