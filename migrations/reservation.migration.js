module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('reservation', {
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
            rented_spaceId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rented_space',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
                unique: true,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
                unique: true,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                field: 'priceNight',
            },
            total: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                field: 'totalPrice',
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('reservation');
    },
};
