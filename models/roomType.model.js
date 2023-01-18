const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RoomType extends Model {
        static associate(models) {
            RoomType.belongsTo(models.rentedSpace, {
                foreingKey: 'roomTypeId',
            });
        }
    }
    RoomType.init(
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
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
            modelName: 'roomType',
            tableName: 'roomType',
        }
    );
    return RoomType;
};
