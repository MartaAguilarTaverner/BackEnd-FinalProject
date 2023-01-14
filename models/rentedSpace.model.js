const { Model } = require('sequelize');
const ReservationModel = require('./reservation.model');
const RoomTypeModel = require('./roomType.model');
const MediaModel = require('./media.model');
const HomeTypeModel = require('./homeType.model');

module.exports = (sequelize, DataTypes) => {
    class RentedSpace extends Model {
        static associate(models) {
            this.hasMany(models.reservation, {
                foreignKey: 'reservationId',
            });
            this.hasMany(models.media, {
                foreignKey: 'mediaId',
            });
            this.hasMany(models.roomType, {
                foreignKey: 'roomTypeId',
            });
            this.hasMany(models.homeType, {
                foreignKey: 'homeTypeId',
            });
            this.belongsTo(models.user, {
                foreignKey: 'userId',
            });
        }
    }

    RentedSpace.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: ReservationModel,
                    key: 'userId',
                },
                allowNull: false,
            },
            homeTypeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: HomeTypeModel,
                    key: 'homeTypeId',
                },
                allowNull: false,
            },
            roomTypeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: RoomTypeModel,
                    key: 'roomTypeId',
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
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                minLength: 10,
                maxLength: 50,
            },
            maxPersons: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            numBedrooms: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            numBathrooms: {
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
            modelName: 'rentedSpace',
            tableName: 'rentedSpace',
        }
    );
    return RentedSpace;
};
