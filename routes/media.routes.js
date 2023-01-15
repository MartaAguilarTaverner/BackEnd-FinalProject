const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const MediaController = require('../controller/media.controller');

const router = express.Router();

router.get('/', MediaController.getAll);

router.get('/:id', MediaController.getOnebyId);

router.post('/:id', AuthMiddleware.isOwner, MediaController.createMedia);

router.put('/:id', AuthMiddleware.isOwner, MediaController.modifyMedia);

router.delete('/:id', AuthMiddleware.isOwner, MediaController.deleteMedia);

module.exports = router;