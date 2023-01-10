const db = requile('../models');
const review = db.review;

const ReviewController = {};

//GROUP SEARCH
ReviewController.getAll = async (req, res) => {
    try {
        const response = await review.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all reviews',
        });
    }
};

//INDIVIDUAL SEARCH
ReviewController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await review.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving one rating',
        });
    }
};

//CREATE REVIEW
ReviewController.doReview = async (req, res) => {
    try {
        const body = req.body;
        const reservationId = body.reservationId;
        const rating = body.rating;
        const comment = body.comment;

        const response = await review.create({ reservationId, rating, comment });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to do a review, please check everything is alright or try again in few minutes',
        });
    }
};

//MODIFY REVIEW
ReviewController.modifyReview = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const reviewObj = {};

        Object.keys(body).forEach((property) => {
            reviewObj[property] = body[property];
        });

        const result = await review.update(reviewObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify a review, please check everything is alright or try again in few minutes',
        });
    }
};

//DELETE REVIEW
ReviewController.deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await review.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete a review, please check everything is alright or try again in few minutes',
        });
    }
};
