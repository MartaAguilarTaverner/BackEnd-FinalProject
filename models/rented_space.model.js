const { Model } = require('sequelize');
const ReservationModel = require('./reservation.model');
const Room_TypeModel = require('./room_type.model');
const MediaModel = require('./media.model');
const Home_TypeModel = require('./home_type.model');

module.exports = (sequelize, DataTypes) => {
    class Rented_Space extends Model {
        static associate(models) {
            this.hasMany(models.reservation, {
                foreignKey: 'reservationId',
                foreignKey: 'userId',
            });
            this.hasMany(models.media, {
                foreignKey: 'mediaId',
            });
            this.hasMany(models.room_type, {
                foreignKey: 'room_typeId',
            });
            this.hasMany(models.home_type, {
                foreignKey: 'home_typeId',
            });
        }
    }

    Rented_Space.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: ReservationModel,
                    key: 'userId',
                },
                allowNull: false,
            },
            home_typeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Home_TypeModel,
                    key: 'home_typeId',
                },
                allowNull: false,
            },
            room_typeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Room_TypeModel,
                    key: 'room_typeId',
                },
                allowNull: false,
            },
            mediaId: {
                type: DataTypes.INTEGER,
                references: {
                    model: MediaModel,
                    key: 'mediaId',
                },
            },
            max_persons: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            num_bedrooms: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            num_bathrooms: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                minLength: 100,
                maxLength: 2000,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tv: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            kitchen: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            airconditioner: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            heating: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            internet: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            publishedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            longitude: {
                type: DataTypes.FLOAT,
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
            modelName: 'rented_space',
            tableName: 'rented_space',
        }
    );
    return Rented_Space;
};
