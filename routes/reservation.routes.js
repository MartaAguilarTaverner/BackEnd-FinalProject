const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const ReservationController = require('../controller/reservation.controller');
const router = require('./homeType.routes');

router.get('/', AuthMiddleware.isAdmin, ReservationController.getAll);

router.get('/user', AuthMiddleware.authToken, ReservationController.getAllbyUserId);

router.get('/rentedspace', AuthMiddleware.authToken, ReservationController.getAllbyRentedSpaceId);

router.get('/:id', AuthMiddleware.authToken, ReservationController.getOnebyId);

router.post('/:id', AuthMiddleware.authToken, ReservationController.doReservation);

router.put('/:id', AuthMiddleware.authToken, ReservationController.modifyReservation);

router.delete('/:id', AuthMiddleware.authToken, ReservationController.modifyReservation);

module.exports = router;
