const userService = require('../services/userService');

const newUser = async (req, res) => {
    const token = req.headers.authorization;
    const user = await userService.createUser(req.body);
    if (user) {
        return res.status(200).json({ token });
    }
};

module.exports = newUser;