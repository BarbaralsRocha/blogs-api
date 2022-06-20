const { User } = require('../database/models');
const { generateJWTToken } = require('../helpers/JWTToken');
// const createMessage = require('../messages');

// const invalidField = { status: 401, message: 'Invalid fields' };

const authentication = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error(JSON.stringify({ status: 400, 
            message: 'Some required fields are missing', 
        }));
    }

    const getUser = await User.findOne({
        where: { email, password },
    });

    if (!getUser) {
        throw new Error(JSON.stringify({ status: 400, message: 'Invalid fields' }));
    }

    const token = generateJWTToken(getUser.dataValues);
    return { token };
};

module.exports = {
    authentication,
}; 