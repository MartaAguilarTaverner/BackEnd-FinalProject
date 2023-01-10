const { Model, DATE } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {
            Media.belongsTo(models.rented_space, {
                foreignKey: 'mediaId',
            });
        }
    }

    Media.init(
        {
            img1: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img2: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img3: {
                tupe: DataTypes.STRING,
                allowNull: false,
            },
            img4: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img5: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img6: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img7: DataTypes.STRING,
            img8: DataTypes.STRING,
            img9: DataTypes.STRING,
            img10: DataTypes.STRING,
            img11: DataTypes.STRING,
            img12: DataTypes.STRING,
            img13: DataTypes.STRING,
            img14: DataTypes.STRING,
            img15: DataTypes.STRING,
            img16: DataTypes.STRING,
            img17: DataTypes.STRING,
            img18: DataTypes.STRING,
            img19: DataTypes.STRING,
            img20: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'media',
            tableName: 'media',
        }
    );
    return Media;
};
