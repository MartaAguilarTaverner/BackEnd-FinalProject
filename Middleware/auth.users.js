const jwt = require('jsonwebtoken');

const AuthMiddleware = {};

AuthMiddleware.generateAccesToken = (username) =>
    jwt.sign({ data: username }, process.env.TOKEN_SECRET, {
        expiresIn: '144000000s',
    });

AuthMiddleware.authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);

        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;

        next();
    });
};

AuthMiddleware.isAdmin = async (req, res, next) => {
    const userId = req.body.userId;

    const user = await user.findByPk(userId);

    if (!user.isAdmin) {
        return res.sendStatus(403);
    }

    next();
};

AuthMiddleware.isOwner = async (req, res, next) => {
    const userId = req.body.userId;

    const user = await user.findByPk(userId);

    if (!user.isOwner) {
        return res.sendStatus(403);
    }

    next();
};

module.exports = AuthMiddleware;
