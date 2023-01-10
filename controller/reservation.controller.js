const db = require('../models');
const reservation = db.reservation;

const ReservationController = {};

//GROUP SEARCH
ReservationController.getAll = async (req, res) => {
    try {
        const response = await reservation.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving reservations',
        });
    }
};

ReservationController.getAllByUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await reservation.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all reservations of one user',
        });
    }
};

ReservationController.getAllByRented_spaceId = async (req, res) => {
    try {
        const rented_spaceId = req.params.rented_spaceid;

        const response = await reservation.findAll({ where: { rented_spaceId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the reservations of one space',
        });
    }
};

//INDIVIDUAL SEARCH
ReservationController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await reservation.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'some error ocurred while retrieving the id of a reservation',
        });
    }
};

//CREATE RESERVATION
ReservationController.doReservation = async (req, res) => {
    try {
        const body = req.body;
        const userId = body.userId;
        const rented_spaceId = body.rented_spaceId;
        const start_date = body.start_date;
        const end_date = body.end_date;
        const price = body.price;
        const total = body.total;

        const response = await reservation.create({ userId, rented_spaceId, start_date, end_date, price, total });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to do a reservation, please check everything is alright or try again after few minutes',
        });
    }
};

//MODIFY RESERVATION
ReservationController.modifyReservation = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const reservationObj = {};

        Object.keys(body).forEach((property) => {
            reservationObj[property] = body[property];
        });
        const result = await reservation.update(reservationObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify a reservation, please check everything is alright or try again afetr few minutes',
        });
    }
};

//DELETE RESERVATION
ReservationController.deleteReservation = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await reservation.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete a reservation, please check everything is alright or try again after few minutes',
        });
    }
};
