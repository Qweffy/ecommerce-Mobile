import Sequalize from "sequelize";

const Category = db.define("category", {
    name: {
        type: Sequalize.STRING,
        allowNull: false
    }
})


export default Category;