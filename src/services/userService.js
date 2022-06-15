const { User } = require('../database/models');

const createUser = async ({
    displayName, 
    email,
    password,
    image,
}) => User.create({
    displayName, 
    email,
    password,
    image,
    });

module.exports = {
    createUser,
}; 