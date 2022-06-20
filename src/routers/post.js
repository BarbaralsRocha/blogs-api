const express = require('express');
const postController = require('../controllers/postController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.get('/',
middlewares.authentication,
postController.getPosts);

module.exports = routes;