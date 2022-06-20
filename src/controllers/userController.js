const userService = require('../services/userService');
const loginService = require('../services/loginService');

const newUser = async (req, res) => {
    try {
        await userService.createUser(req.body);
        const token = await loginService.authentication(req.body);
        return res.status(201).json(token);
    } catch (e) {
        return res.status(409).json({ message: 'User already registered' });
    }
};

const getUsers = async (req, res) => {
    const user = await userService.getUsers(req.body);
    return res.status(200).json(user);
};

const getUsersById = async (req, res) => {
    const user = await userService.getUsersById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    await userService.deleteUser(res.locals.payload.id);
    return res.status(204).end();
};

module.exports = {
    newUser,
    getUsers,
    getUsersById,
    deleteUser,
};