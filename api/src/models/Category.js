import Sequalize from "sequelize";

const Category = db.define("category", {
    name: {
        type: Sequalize.STRING,
        allowNull: false
    }
})

Category.belongsToMany(Products, { through: Product_Category });
export default Category;