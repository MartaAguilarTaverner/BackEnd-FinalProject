const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const UserController = require('../controller/user.controller');

const router = express.Router();

router.get('/', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAll);

router.get('/owner', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAllUsersOwner);

router.get('/admin', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAllUsersAdmin);

router.get('/:id(\\d+$)', AuthMiddleware.authToken, UserController.getOnebyId);

router.post('/login', UserController.login);

router.post('/register', UserController.register);

router.put('/modify/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.userIsAllowed, UserController.modifyUser);

router.delete('/delete/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.userIsAllowed, UserController.deleteUser);

module.exports = router;
