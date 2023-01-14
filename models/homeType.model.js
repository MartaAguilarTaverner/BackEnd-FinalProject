const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HomeType extends Model {
        static associate(models) {
            HomeType.belongsTo(models.rentedSpace, {
                foreignKey: 'homeTypeId',
            });
        }
    }

    HomeType.init(
        {
            apartment: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            house: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            chalet: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            ruralHouse: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            shared: {
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
            modelName: 'homeType',
            tableName: 'homeType',
        }
    );
    return HomeType;
};
