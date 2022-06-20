const Joi = require('joi');

const userDTO = Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'any.required': '400|{{#label}} is required',
        'string.min': '400|{{#label}} length must be at least 8 characters long',
    }),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
        'any.required': '400|{{#label}} is required',
        'string.min': '400|{{#label}} length must be at least 6 characters long',
    }),
    image: Joi.string().required(),
}).required().messages({
    'any.required': '400|{{#label}} is required',
    'string.base': '400| must be a string',
    'number.base': '422|{{#label}} must be a number',
    'email.base': '422|{{#label}} must be a valid email',
});

const userValidation = (req, res, next) => {
    const { error } = userDTO.validate(req.body);
    if (error) {
        const [code, message] = error.message.split('|');
        return res.status(code).json({ message });
    }
    next();
};

module.exports = userValidation;