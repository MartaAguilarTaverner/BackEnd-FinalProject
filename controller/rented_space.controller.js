const db = require('../models');
const rented_space = db.rented_space;

const Rented_spaceController = {};

//GROUP SEARCH
Rented_spaceController.getAll = async (req, res) => {
    try {
        const response = await rented_space.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all rented spaces',
        });
    }
};

Rented_spaceController.getAllbyUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await rented_space.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving owners of rented space',
        });
    }
};

Rented_spaceController.getAllByRoomTypeId = async (req, res) => {
    try {
        const room_typeId = req.params.room_typeid;

        const response = await rented_space.finAll({ where: { room_typeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all room types of the rented space',
        });
    }
};

Rented_spaceController.getAllByHomeTypeId = async (req, res) => {
    try {
        const home_typeId = req.params.home_typeid;

        const response = await rented_space.finAll({ where: { home_typeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all home types of the rented space',
        });
    }
};

Rented_spaceController.getAllByMediaId = async (req, res) => {
    try {
        const mediaId = req.params.mediaid;

        const response = await rented_space.findAll({ where: { mediaId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all media of the rented space',
        });
    }
};

//INDIVIDUALSEARCH
Rented_spaceController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await rented_space.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving rented space',
        });
    }
};

//CREATE RENTED_SPACE
Rented_spaceController.createRentedSpace = async (req, res) => {
    try {
        const body = req.body;
        const userId = body.userId;
        const home_typeId = body.home_typeId;
        const room_typeId = body.room_typeId;
        const mediaId = body.mediaId;
        const max_persons = body.max_persons;
        const num_bedrooms = body.num_bedrooms;
        const num_bathrooms = body.num_bathrooms;
        const description = body.description;
        const address = body.address;
        const tv = body.tv;
        const kitchen = body.kitchen;
        const airconditioner = body.airconditioner;
        const heating = body.heating;
        const internet = body.internet;
        const price = body.price;
        const publishedAt = body.publishedAt;
        const latitude = body.latitude;
        const longitude = body.longitude;

        const response = await review.create({
            userId,
            home_typeId,
            room_typeId,
            mediaId,
            max_persons,
            num_bedrooms,
            num_bathrooms,
            description,
            address,
            tv,
            kitchen,
            airconditioner,
            heating,
            internet,
            price,
            publishedAt,
            latitude,
            longitude,
        });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred trying to create a renting space, please check everything is alright or try again in few minutes',
        });
    }
};

//MODIFY RENTED_SPACE
Rented_spaceController.modifyRentedSpace = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const spaceObj = {};

        Object.keys(body).forEach((property) => {
            spaceObj[property] = body[property];
        });

        const result = await rented_space.update(spaceObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify a renting space, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE RENTED_SPACE
Rented_spaceController.deleteRentedSpace = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await rented_space.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the rented space, please check everything is alright or try again in few minutes',
        });
    }
};
