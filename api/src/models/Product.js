const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    camara: {
      type: DataTypes.STRING,
      allowNull: true
    },
    frontcamara: {
      type: DataTypes.STRING,
      allowNull: true
    },
    battery: {
      type: DataTypes.STRING,
      allowNull: true
    },
    others: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dimensions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    averageRating: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });
};
