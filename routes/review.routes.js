const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const ReviewController = require('../controller/review.controller');

const router = express.Router();

router.get('/', AuthMiddleware.authToken, ReviewController.getAll);

router.get('/:id', AuthMiddleware.authToken, ReviewController.getOnebyId);

router.post('/:id', AuthMiddleware.authToken, ReviewController.doReview);

router.put('/:id', AuthMiddleware.authToken, ReviewController.modifyReview);

router.delete('/:id', AuthMiddleware.authToken, ReviewController.deleteReview);

module.exports = router;
