const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const HomeTypeController = require('../controller/homeType.controller');

const router = express.Router();

router.get('/', HomeTypeController.getAll);

router.get('/:id', HomeTypeController.getOnebyId);

router.post('/:id', AuthMiddleware.isAdmin, HomeTypeController.createHomeType);

router.put('/:id', AuthMiddleware.isAdmin, HomeTypeController.modifyHomeType);

router.delete('/:id', AuthMiddleware.isAdmin, HomeTypeController.deleteHomeType);

module.exports = router;
