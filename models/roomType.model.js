const { Model } = requre('sequelize');

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
            individual: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            twoBeds: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            masterBed: {
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
            modelName: 'roomType',
            tableName: 'roomType',
        }
    );
    return RoomType;
};
