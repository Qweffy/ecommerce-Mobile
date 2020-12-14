const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.TEXT,
        validate: {
            isValid(value) {
                if (value !== 'Administrator' || value !== 'User') {
                    throw new Error('Insert valid user');
                }
            }
        }
    }
  });
};