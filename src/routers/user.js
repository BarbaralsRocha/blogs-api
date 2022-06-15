const express = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.post('/',
middlewares.authentication,
middlewares.userValidation,
userController);

module.exports = routes;