const { Model } = require('sequelize');
const 

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
        age: {
            type: DataTypes.DATE,
            require: true,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            minlenght: 9,
            maxLenght: 15,
        },
        descriptiom: DataTypes.TEXT,
        profile_img: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            minLenght: 8,
            maxLenght: 30,
        },
        {
            sequelize,
            modelName: "user",
            tableName: "user",
        }
    );

    return User;
};