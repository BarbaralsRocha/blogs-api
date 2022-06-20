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

routes.put('/:id',
middlewares.authentication,
middlewares.putPostValidation,
postController.updatePost);

routes.delete('/:id',
middlewares.authentication,
postController.deletePost);

module.exports = routes;