const express = require('express');
const errorHandler = require('../middlewares');

const router = express.Router();

const routeLogin = require('./login');
const routeUser = require('./user');

router.use('/login', routeLogin);
router.use('/user', routeUser);

router.use(errorHandler.error);

module.exports = router;