const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const UserController = require('../controller/user.controller');

const router = express.Router();

router.get('/', AuthMiddleware.isAdmin, UserController.getAll);

router.get('/owner', AuthMiddleware.isAdmin, UserController.getAllUsersOwner);

router.get('/admin', AuthMiddleware.isAdmin, UserController.getAllUsersAdmin);

router.get('/:id(\\d+$)', AuthMiddleware.authToken, UserController.getOnebyId);

router.post('/login', UserController.login);

router.post('/register', UserController.register);

router.put('/modify', AuthMiddleware.userIsAllowed, UserController.modifyUser);

router.delete('/delete', AuthMiddleware.userIsAllowed, UserController.deleteUser);

module.exports = router;
