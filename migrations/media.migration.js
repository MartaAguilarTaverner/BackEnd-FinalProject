module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('media', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            img1: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img3: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img4: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img5: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img6: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            img7: Sequelize.STRING,
            img8: Sequelize.STRING,
            img9: Sequelize.STRING,
            img10: Sequelize.STRING,
            img11: Sequelize.STRING,
            img12: Sequelize.STRING,
            img13: Sequelize.STRING,
            img14: Sequelize.STRING,
            img15: Sequelize.STRING,
            img16: Sequelize.STRING,
            img17: Sequelize.STRING,
            img18: Sequelize.STRING,
            img19: Sequelize.STRING,
            img20: Sequelize.STRING,
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('media');
    },
};
