const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../../configs/regex.enum');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(3).max(50)
        .required(),
    email: Joi.string().regex(EMAIL),
    password: Joi.string().regex(PASSWORD),
    // year: Joi.number().integer().min(1930).max(CURRENT_YEAR - 100),
    // hasCar: Joi.boolean(),
    // girls: Joi.array().items(
    //     Joi.object({
    //         name: Joi.string().alphanum().max(20)
    //     })
    // )
    //     .optional()
    //     .when('hasCar', { is: true, then: Joi.required() })
});
