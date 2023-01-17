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
            name: {
                type: DataTypes.STRING,
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
