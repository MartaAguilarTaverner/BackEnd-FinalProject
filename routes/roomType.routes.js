const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const RoomTypeController = require('../controller/roomType.controller');

const router = express.Router();

router.get('/', RoomTypeController.getAll);

router.get('/:id', RoomTypeController.getOnebyId);

router.post('/:id', AuthMiddleware.isAdmin, RoomTypeController.createRoomType);

router.put('/:id', AuthMiddleware.isAdmin, RoomTypeController.modifyRoomType);

router.delete('/:id', AuthMiddleware.isAdmin, RoomTypeController.deleteRoomType);

module.exports = router;
