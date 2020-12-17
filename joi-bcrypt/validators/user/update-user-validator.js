const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../../configs/regex.enum');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(3).max(50),
    email: Joi.string().regex(EMAIL),
    password: Joi.string().regex(PASSWORD)
});
