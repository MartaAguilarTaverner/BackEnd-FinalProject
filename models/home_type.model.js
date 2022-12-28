const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Home_Type extends Model {
        static associate(models) {
            Home_Type.belongsTo(models.rented_space, {
                foreignKey: 'home_typeId',
            });
        }
    }

    Home_Type.init(
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
            modelName: 'home_type',
            tableName: 'home_type',
        }
    );
    return Home_Type;
};
