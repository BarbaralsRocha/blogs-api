const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateJWTToken = (payload) => 
    jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        throw new Error({ status: 401, message: 'Sem Token' });
    }

    try {
        const introspection = jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (e) {
        console.log('error', e.message);
        throw new Error({ status: 401, message: 'token inválido' });
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
}; 