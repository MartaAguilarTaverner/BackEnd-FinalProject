const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const RentedSpaceController = require('../controller/rentedSpace.controller');

const router = express.Router();

router.get('/', RentedSpaceController.getAll);

router.get('/all', AuthMiddleware.isAdmin, RentedSpaceController.getAllbyUserId);

router.get('/roomtype', RentedSpaceController.getAllbyRoomTypeId);

router.get('/media', RentedSpaceController.getAllbyMediaId);

router.get('/:id', RentedSpaceController.getOnebyId);

router.post('/create', RentedSpaceController.createRentedSpace);

router.put('/modify', AuthMiddleware.isOwner, RentedSpaceController.modifyRentedSpace);

router.delete('/delete', AuthMiddleware.isOwner, RentedSpaceController.deleteRentedSpace);

module.exports = router;