const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.post('/',
middlewares.authentication,
middlewares.categoryValidation,
categoriesController.newCategory);

routes.get('/',
middlewares.authentication,
categoriesController.getCategories);

module.exports = routes;