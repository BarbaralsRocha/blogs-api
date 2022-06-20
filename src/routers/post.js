const express = require('express');
const postController = require('../controllers/postController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.post('/',
middlewares.authentication,
middlewares.postValidation,
postController.newPost);

routes.get('/',
middlewares.authentication,
postController.getPosts);

routes.get('/:id',
middlewares.authentication,
postController.getPostById);

module.exports = routes;