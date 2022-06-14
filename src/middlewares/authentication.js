const { authenticateToken } = require('../helpers/JWTToken');

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    
    const payload = await authenticateToken(token);

    res.locals.payload = payload;

    next();
};

module.exports = authenticationMiddleware; 