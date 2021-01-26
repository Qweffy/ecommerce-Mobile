"use strict";

const { AccessDeniedError } = require("sequelize");
const bcrypt = require("bcrypt");

function encrpyt(value) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(value, salt);
  return hash;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert("users", [
      {
        givenName: "Qweffo",
        familyName: "Mastakas",
        email: "qweffo@asd.com",
        password: encrpyt("12345"),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        givenName: "Suyai",
        familyName: "Slootmans",
        email: "suyai@asd.com",
        password: encrpyt("12345"),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        givenName: "Nico",
        familyName: "La bestia",
        email: "valencia@asd.com",
        password: encrpyt("12345"),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        givenName: "Rodri",
        familyName: "Arguello",
        email: "rodri@asd.com",
        password: encrpyt("12345"),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        givenName: "Juan",
        familyName: "Ceschin",
        email: "facha@asd.com",
        password: encrpyt("12345"),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        givenName: "Nereo",
        familyName: "A la carbonara",
        email: "carbonara@asd.com",
        password: encrpyt("12345"),
        isAdmin: true,
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
