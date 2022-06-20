const Joi = require('joi');

const postDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
}).messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',
    'string.base': '400| must be a string',
    });

const postValidation = async (req, res, next) => {
    const { error } = postDTO.validate(req.body);
    if (error) {
        const [code, message] = error.message.split('|');
        return res.status(code).json({ message });
    }
    next();
};

module.exports = postValidation;