module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('rented_space', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            home_typeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rented_space',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            room_typeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rented_space',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            mediaId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rented_space',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            max_persons: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            num_bedrooms: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            num_bathrooms: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                minLength: 100,
                maxLength: 2000,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tv: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            kitchen: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            airconditioner: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            heating: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            internet: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            publishedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            latitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('rented_space');
    },
};
