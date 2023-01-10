const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const MediaController = require('../controller/media.controller');

const router = express.Router();

router.get('/', AuthMiddleware.authToken, MediaController.getAll);

router.get('/:id', AuthMiddleware.authToken, MediaController.getOnebyId);

router.post();
