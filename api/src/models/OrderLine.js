const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("order_line", {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        count: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
          allowNull: false
        }
    });
};