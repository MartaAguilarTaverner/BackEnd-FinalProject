const db = require('../models');
const home_type = db.home_type;

const HomeTypeController = {};

//GROUP SEARCH
HomeTypeController.getAll = async (req, res) => {
    try {
        const response = await home_type.findAll();

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

        const response = await home_type.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a home type',
        });
    }
};

//CREATE HOME_TYPE
HomeTypeController.createHomeType = async (req, res) => {
    try {
        const body = req.body;
        const apartment = body.apartment;
        const house = body.house;
        const chalet = body.chalet;
        const ruralHouse = body.ruralHouse;
        const shared = body.shared;

        const response = await home_type.create({ apartment, house, chalet, ruralHouse, shared });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred trying to create a home type, pelease check everything is alright or tey again in few minutes',
        });
    }
};

//MODIFY HOME_TYPE
HomeTypeController.modifyHomeType = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const homeObj = {};

        Object.keys(body).forEach((property) => {
            homeObj[property] = body[property];
        });

        const result = await home_type.update(homeObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the home data, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE HOME_TYPE
HomeTypeController.deleteHomeType = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await home_type.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the home type, please check everything is alright or try again in few minutes',
        });
    }
};
