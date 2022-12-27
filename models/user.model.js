const { Model } = require('sequelize');
const user_typeModel = require('./user_type.model');
const 

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.user_type, {
                foreignKey: 'user_typeId',
            }
            )};
    }

    User.init(
        {
            user_typeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: user_typeModel,
                    key: 'id',
                },
                allowNull: false,
            },
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
        },
        {
            sequelize,
            modelName: "user",
            tableName: "user",
        },
    );

    return User;
};