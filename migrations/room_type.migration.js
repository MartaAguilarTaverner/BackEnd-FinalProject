module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('room_type', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            individual: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            twoBeds: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            masterBed: {
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
        await queryInterface.dropTable('room_type');
    },
};
