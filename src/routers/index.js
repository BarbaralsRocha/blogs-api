const express = require('express');
const errorHandler = require('../middlewares');

const router = express.Router();

const routeLogin = require('./login');
const routeUser = require('./user');
const routeCategories = require('./categories');
const routePost = require('./post');

router.use('/login', routeLogin);
router.use('/user', routeUser);
router.use('/categories', routeCategories);
router.use('/post', routePost);

router.use(errorHandler.error);

module.exports = router;