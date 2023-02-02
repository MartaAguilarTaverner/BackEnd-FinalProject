const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const ReservationController = require('../controller/reservation.controller');

const router = express.Router();

router.get('/', AuthMiddleware.isAdmin, ReservationController.getAll);

router.get('/user', AuthMiddleware.userIsAllowed, ReservationController.getAllbyUserId);

router.get('/rentedspace', AuthMiddleware.authToken, ReservationController.getAllbyRentedSpaceId);

router.get('/:id', AuthMiddleware.userIsAllowed, ReservationController.getOnebyId);

router.post('/:id', AuthMiddleware.authToken, ReservationController.doReservation);

router.put('/:id', AuthMiddleware.userIsAllowed, ReservationController.modifyReservation);

router.delete('/:id', AuthMiddleware.userIsAllowed, ReservationController.modifyReservation);

module.exports = router;
