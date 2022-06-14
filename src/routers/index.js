const express = require('express');
const errorHandler = require('../middlewares');

const router = express.Router();

const routeLogin = require('./login');

router.use('/login', routeLogin);

router.use(errorHandler.error);

module.exports = router;