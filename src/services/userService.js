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

const getUsers = () => User.findAll({
    attributes: { exclude: ['password'] } });

const getUsersById = (id) => User.findOne(
    {
    attributes: { exclude: ['password'] },
    where: { id },
    },
);

module.exports = {
    createUser,
    getUsers,
    getUsersById,
}; 