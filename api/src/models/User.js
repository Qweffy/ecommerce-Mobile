const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // type: {
    //   type: DataTypes.TEXT,
    //   validate: {
    //     validUserType(value) {
    //       if (value !== "Administrator" || value !== "User") {
    //         throw new Error("Insert valid user");
    //       }
    //     },
    //   },
    // },
  });
};
