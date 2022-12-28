const { Model } = requre('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Room_Type extends Model {
        static associate(models) {
            Room_Type.belongsTo(models.rented_space, {
                foreingKey: 'room_typeId',
            });
        }
    }
    Room_Type.init(
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
            modelName: 'room_type',
            tableName: 'room_type',
        }
    );
    return Room_Type;
};
