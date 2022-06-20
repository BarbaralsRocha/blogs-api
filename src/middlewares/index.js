const error = require('./errorHandler');
const authentication = require('./authentication');
const userValidation = require('./userValidation');
const categoryValidation = require('./categoryValidation');
const postValidation = require('./postValidation');
const putPostValidation = require('./putPostValidation');

module.exports = {
    error,
    authentication,
    userValidation,
    categoryValidation,
    postValidation,
    putPostValidation,
};