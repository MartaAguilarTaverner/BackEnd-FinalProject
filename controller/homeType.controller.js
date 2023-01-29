const db = require('../models');
const homeType = db.homeType;
const user = db.user;

const HomeTypeController = {};

//GROUP SEARCH
HomeTypeController.getAll = async (req, res) => {
    try {
        const response = await homeType.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the home types',
        });
    }
};

//INDIVIDUAL SEARCH
HomeTypeController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await homeType.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a home type',
        });
    }
};

//CREATE HOMETYPE
HomeTypeController.createHomeType = async (req, res) => {
    try {
        const body = req.body;
        const name = body.home.name;

        const response = await homeType.create({ name });

        res.send({ id: response.id });
    } catch (error) {
        console.log('🚀 ~ file: homeType.controller.js:45 ~ HomeTypeController.createHomeType= ~ error', error);
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred trying to create a home type, pelease check everything is alright or tey again in few minutes',
        });
    }
};

//MODIFY HOMETYPE
HomeTypeController.modifyHomeType = async (req, res) => {
    try {
        const body = req.body.home;
        const id = req.params.id;
        const homeObj = {};

        Object.keys(body).forEach((property) => {
            homeObj[property] = body[property];
        });

        const result = await homeType.update(homeObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the home data, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE HOMETYPE
// TODO: Review error 500
HomeTypeController.deleteHomeType = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await homeType.destroy({ where: { id } });

        res.status(200).send();
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the home type, please check everything is alright or try again in few minutes',
        });
    }
};

module.exports = HomeTypeController;
