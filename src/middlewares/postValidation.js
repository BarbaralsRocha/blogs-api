const Joi = require('joi');
const { Category } = require('../database/models');

const postDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().min(1).required(),
}).messages({
    'any.required': '400|Some required fields are missing',
    'string.base': '400| must be a string',
    });

const postValidation = async (req, res, next) => {
    const { error } = postDTO.validate(req.body);
    if (error) {
        const [code, message] = error.message.split('|');
        return res.status(code).json({ message });
    }

    // validate category
    const { categoryIds } = req.body;
    const categories = await Category.findAll();
    categoryIds.forEach((category) => {
    if (category > categories.length) {
        return res.status(400).json({
            message: '"categoryIds" not found',
          });
    } 
});
    next();
};

module.exports = postValidation;