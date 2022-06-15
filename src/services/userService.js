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

const getUsers = () => User.findAll();

const getUsersById = (id) => User.findByPk(id);

module.exports = {
    createUser,
    getUsers,
    getUsersById,
}; 