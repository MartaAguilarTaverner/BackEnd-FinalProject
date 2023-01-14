const { Model } = require('sequelize');
const UserModel = require('./user.model');
const RentedSpaceModel = require('./rentedSpace.model');

module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate(models) {
            this.hasMany(models.reviews, {
                foreignKey: 'reservationId',
            });
            Reservation.belongsTo(models.user, {
                foreignKey: 'userId',
            });
            Reservation.belongsTo(models.rentedSpace, {
                foreignKey: 'rentedSpaceId',
            });
        }
    }
    Reservation.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: UserModel,
                    key: 'id',
                },
                allowNull: false,
            },
            rentedSpaceId: {
                type: DataTypes.INTEGER,
                references: {
                    model: RentedSpaceModel,
                },
                allowNull: false,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                field: 'priceNight',
            },
            total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                field: 'totalPrice',
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
            modelName: 'reservation',
            tableName: 'reservation',
        }
    );
    return Reservation;
};
