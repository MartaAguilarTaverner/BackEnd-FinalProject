const db = require('../models');
const AuthMiddleware = require('../Middleware/auth.users');
const roomType = db.roomType;

const RoomTypeController = {};

//GROUP SEARCH
RoomTypeController.getAll = async (req, res) => {
    try {
        const response = await roomType.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the rooms types',
        });
    }
};

//INDIVIDUAL SEARCH
RoomTypeController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await roomType.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a room type',
        });
    }
};

//CREATE ROOMTYPE
RoomTypeController.createRoomType = async (req, res) => {
    try {
        const body = req.body;
        const name = body.roomType.name;

        const response = await roomType.create({
            name,
        });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to create a room type, please check everything is alright or try agin in few minutes',
        });
    }
};

//MODIFY ROOMTYPE
RoomTypeController.modifyRoomType = async (req, res) => {
    try {
        const body = req.body.roomType;
        const id = req.params.id;
        const roomObj = {};

        Object.keys(body).forEach((property) => {
            roomObj[property] = body[property];
        });
        const result = await roomType.update(roomObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the rrom type, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE ROOMTYPE
RoomTypeController.deleteRoomType = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await roomType.destroy({ where: { id } });

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete a room Type, please check everything is alright or try again in few minutes',
        });
    }
};

module.exports = RoomTypeController;
