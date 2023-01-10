const db = require('../models');
const room_type = db.room_type;

const RoomTypeController = {};

//GROUP SEARCH
RoomTypeController.getAll = async (req, res) => {
    try {
        const response = await room_type.findAll();

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

        const response = await room_type.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a room type',
        });
    }
};

//CREATE ROOM_TYPE
RoomTypeController.createRoomType = async (req, res) => {
    try {
        const body = req.body;
        const individual = body.individual;
        const twoBeds = body.twoBeds;
        const masterBed = body.masterBed;

        const response = await room_type.create({
            individual,
            twoBeds,
            masterBed,
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

//MODIFY ROOM_TYPE
RoomTypeController.modifyRoomType = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const roomObj = {};

        Object.keys(body).forEach((property) => {
            roomObj[property] = body[property];
        });
        const result = await room_type.update(roomObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the rrom type, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE ROOM_TYPE
RoomTypeController.deleteRoomType = async (req, res) => {
    try {
        const id = req.parms.id;
        const response = await room_type.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete a room_type, please check everything is alright or try again in few minutes',
        });
    }
};
