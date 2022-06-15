const express = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.post('/',
middlewares.authentication,
middlewares.userValidation,
userController.newUser);

routes.get('/',
middlewares.authentication,
userController.getUsers);

routes.get('/:id',
middlewares.authentication,
userController.getUsersById);

module.exports = routes;