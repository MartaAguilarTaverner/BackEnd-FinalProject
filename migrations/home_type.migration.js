const { Sequelize } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('home_type', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            apartment: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            house: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            chalet: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            ruralHouse: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            shared: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
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
        await queryInterface.dropTable('home_type');
    },
};
