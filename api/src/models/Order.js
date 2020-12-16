const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("order", {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};