const loginService = require('../services/loginService');

const login = async (req, res) => {
    const token = await loginService.authentication(req.body);
    return res.status(200).json(token);
};

module.exports = login;