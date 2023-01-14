const db = require('../models');
const reservationModel = require('../models/reservation.model');
const media = db.media;

const MediaController = {};

//GROUP SEARCH
MediaController.getAll = async (req, res) => {
    try {
        const response = await media.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the media',
        });
    }
};

//INDIVIDUAL SEARCH
MediaController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await media.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a media',
        });
    }
};

//CREATE MEDIA
MediaController.createMedia = async (req, res) => {
    try {
        const body = req.body;

        const mediaObj = {
            img1: body.img1,
            img2: body.img2,
            img3: body.img3,
            img4: body.img4,
            img5: body.img5,
            img6: body.img6,
        };

        Object.keys(body).forEach((property) => {
            if (!mediaObj[property]) {
                mediaObj[property] = body[property];
            }
        });
        const response = await media.create(mediaObj);

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to create a media, please check everything is alright or try again in few minutes',
        });
    }
};

//MODIFY MEDIA
MediaController.modifyMedia = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const mediaModObj = {};

        Object.keys(body).forEach((property) => {
            mediaModObj[property] = body[property];
        });
        const result = await media.update(mediaModObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the media, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE MEDIA
MediaController.deleteMedia = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await media.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the media, please check everything is alright or try again in few minutes',
        });
    }
};

//TODO the crypto for the password, do the routes, put few seeders, test.
