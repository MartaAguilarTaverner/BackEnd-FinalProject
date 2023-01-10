const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.reservation, {
                foreignKey: 'userId',
            });
            this.hasMany(models.rented_space, {
                foreignKey: 'userId',
            });
        }
    }

    User.init(
        {
            name: {
                type: DataTypes.STRING,
                require: true,
                allowNull: false,
                minLength: 2,
                maxLength: 20,
            },
            surname: {
                type: DataTypes.STRING,
                require: true,
                allowNull: false,
                minLength: 2,
                maxLength: 40,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                minLength: 11,
                maxLength: 50,
            },
            age: {
                type: DataTypes.DATE,
                require: true,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
                minLength: 9,
                maxLength: 15,
            },
            descriptiom: DataTypes.TEXT,
            profile_img: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                minLength: 8,
                maxLength: 30,
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            isOwner: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'user',
            tableName: 'user',
        }
    );
    return User;
};
