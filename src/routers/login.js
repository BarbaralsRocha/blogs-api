const express = require('express');
const loginController = require('../controllers/loginController');
const errorHandler = require('../middlewares/errorHandler');

const routes = express.Router();

routes.post('/', loginController);

routes.use(errorHandler);

module.exports = routes;