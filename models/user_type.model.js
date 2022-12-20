const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.usertype, {
                foreignKey: 'userId',
            }),
                this.hasMany(models.renting, {
                    foreignKey: 'userId',
                }),
                this.hasMany(models.rentedspace, {
                    foreignKey: 'userId',
                });
        }
    }

    User.init({
        name: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false,
            minLenght: 2,
            maxLenght: 20,
        },
        surname: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false,
            minLenght: 2,
            maxLenght: 30,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            minLenght: 11,
            maxLenght: 40,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            minLenght: 8,
            maxLenght: 30,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            minlenght: 9,
            maxLenght: 15,
        },
    });
};
