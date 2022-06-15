const userService = require('../services/userService');

const newUser = async (req, res) => {
    const token = req.headers.authorization;
    try {
        await userService.createUser(req.body);
        return res.status(200).json({ token });
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

module.exports = {
    newUser,
    getUsers,
    getUsersById,
};