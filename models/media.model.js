const { Model } = require('sequelize');
const RentedSpaceModel = require('./rentedSpace.model');

module.exports = (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {
            this.hasOne(models.rentedSpace, {
                foreignKey: 'mediaId',
            });
        }
    }

    Media.init(
        {
            img1: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img2: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img3: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img4: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img5: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img6: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            img7: DataTypes.BLOB('medium'),
            img8: DataTypes.BLOB('medium'),
            img9: DataTypes.BLOB('medium'),
            img10: DataTypes.BLOB('medium'),
            img11: DataTypes.BLOB('medium'),
            img12: DataTypes.BLOB('medium'),
            img13: DataTypes.BLOB('medium'),
            img14: DataTypes.BLOB('medium'),
            img15: DataTypes.BLOB('medium'),
            img16: DataTypes.BLOB('medium'),
            img17: DataTypes.BLOB('medium'),
            img18: DataTypes.BLOB('medium'),
            img19: DataTypes.BLOB('medium'),
            img20: DataTypes.BLOB('medium'),
        },
        {
            sequelize,
            modelName: 'media',
            tableName: 'media',
        }
    );
    return Media;
};
