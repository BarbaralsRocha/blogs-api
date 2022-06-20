const Joi = require('joi');

const categoryDTO = Joi.object({
    name: Joi.string().required().messages({
    'any.required': '400|{{#label}} is required',
    'string.base': '400| must be a string',
    }),
});

const categoryValidation = (req, res, next) => {
    const { error } = categoryDTO.validate(req.body);
    if (error) {
        const [code, message] = error.message.split('|');
        return res.status(code).json({ message });
    }
    next();
};

module.exports = categoryValidation;