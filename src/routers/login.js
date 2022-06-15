const express = require('express');
const loginController = require('../controllers/loginController');

const routes = express.Router();

routes.post('/', loginController);

module.exports = routes;