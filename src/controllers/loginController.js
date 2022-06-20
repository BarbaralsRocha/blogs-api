const loginService = require('../services/loginService');

const login = async (req, res) => {
    const token = await loginService.authentication(req.body);
    // REFATORAR 
    if (token === null) {
        return res.status(401).json({ message: 'Invalid fields' });
    }
    return res.status(200).json(token);
};

module.exports = login;