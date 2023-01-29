const db = require('../models');
const rentedSpace = db.rentedSpace;

const RentedSpaceController = {};

//GROUP SEARCH
RentedSpaceController.getAll = async (req, res) => {
    try {
        const response = await rentedSpace.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all rented spaces',
        });
    }
};

RentedSpaceController.getAllbyUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await rentedSpace.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving owners of rented space',
        });
    }
};

RentedSpaceController.getAllbyRoomTypeId = async (req, res) => {
    try {
        const roomTypeId = req.params.roomTypeId;

        const response = await rentedSpace.finAll({ where: { roomTypeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all room types of the rented space',
        });
    }
};

RentedSpaceController.getAllbyHomeTypeId = async (req, res) => {
    try {
        const homeTypeId = req.params.homeTypeId;

        const response = await rentedSpace.finAll({ where: { homeTypeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all home types of the rented space',
        });
    }
};

RentedSpaceController.getAllbyMediaId = async (req, res) => {
    try {
        const mediaId = req.params.mediaId;

        const response = await rentedSpace.findAll({ where: { mediaId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all media of the rented space',
        });
    }
};

//INDIVIDUALSEARCH
RentedSpaceController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await rentedSpace.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving rented space',
        });
    }
};

//CREATE RENTEDSPACE
RentedSpaceController.createRentedSpace = async (req, res) => {
    try {
        const body = req.body;
        const userId = body.userId;
        const homeTypeId = body.homeTypeId;
        const roomTypeId = body.roomTypeId;
        const mediaId = body.mediaId;
        const title = body.title;
        const maxPersons = body.maxPersons;
        const numBedrooms = body.numBedrooms;
        const numBathrooms = body.numBathrooms;
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

        const responseRented = await rentedSpace.create({
            userId,
            homeTypeId,
            roomTypeId,
            mediaId,
            title,
            maxPersons,
            numBedrooms,
            numBathrooms,
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

        await user.update({ isOwner: true }, { where: { id: userId } });

        res.send({ id: responseRented.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred trying to create a renting space, please check everything is alright or try again in few minutes',
        });
    }
};

//MODIFY RENTEDSPACE
RentedSpaceController.modifyRentedSpace = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const spaceObj = {};

        Object.keys(body).forEach((property) => {
            spaceObj[property] = body[property];
        });

        const result = await rentedSpace.update(spaceObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify a renting space, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE RENTEDSPACE
RentedSpaceController.deleteRentedSpace = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await rentedSpace.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the rented space, please check everything is alright or try again in few minutes',
        });
    }
};

module.exports = RentedSpaceController;
