const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User_type extends Model {}
    User_type.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
