const express = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.post('/',

middlewares.userValidation,
userController.newUser);

routes.get('/',
middlewares.authentication,
userController.getUsers);

routes.get('/:id',
middlewares.authentication,
userController.getUsersById);

routes.delete('/me',
middlewares.authentication,
userController.deleteUser);

module.exports = routes;