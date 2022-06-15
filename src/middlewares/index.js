const error = require('./errorHandler');
const authentication = require('./authentication');
const userValidation = require('./userValidation');
const categoryValidation = require('./categoryValidation');

module.exports = {
    error,
    authentication,
    userValidation,
    categoryValidation,
};