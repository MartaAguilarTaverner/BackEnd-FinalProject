const { Model } = require('sequelize');
const UserModel = require('./user.model');
const Rented_SpaceModel = require('./rented_space.model');

module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate(models) {
            this.hasMany(models.reviews, {
                foreignKey: 'reservationId',
            });
            Reservation.belongsTo(models.user, {
                foreignKey: 'userId',
            });
            Reservation.belongsTo(models.rented_space, {
                foreignKey: 'rented_spaceId',
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
            rented_spaceId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Rented_SpaceModel,
                },
                allowNull: false,
            },
            start_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            end_date: {
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
