const { ErrorHandler, errors: { NOT_VALID_ID } } = require('../../error');
const { userValidator } = require('../../validators');
const { BAD_REQUEST } = require('../../configs/error-codes');

module.exports = {
    isIdCorrect: (req, res, next) => {
        try {
            const { userId } = req.params;
            if (!userId || userId < 0 || !Number.isInteger(+userId)) {
                throw new ErrorHandler(NOT_VALID_ID.message, NOT_VALID_ID.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    isUserUpdateCorrect: (req, res, next) => {
        try {
            const { error } = userValidator.updateUserValidator.validate(req.body);
            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST,);
            }
        } catch (e) {
            next(e);
        }
    },
    isUserCreateCorrect: (req, res, next) => {
        try {
            const { error } = userValidator.newUserValidator.validate(req.body);
            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST,);
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};
