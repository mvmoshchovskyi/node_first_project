const {
    OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED
} = require('../configs/error-codes');

module.exports = {

    NOT_VALID_ID: {
        message: 'ID is not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_BODY: {
        message: 'Not valid data',
        code: BAD_REQUEST
    },
    ITEM_EXISTS: {
        message: 'Item already exists',
        code: BAD_REQUEST
    },
    EMAIL_ALREADY_USED: {
        message: 'Email already used',
        code: BAD_REQUEST
    },
    NO_SUCH_USER: {
        message: 'No such user',
        code: NO_CONTENT
    },
    INVALID_DETAILS: {
        message: 'Invalid details',
        code: UNAUTHORIZED
    },
    ITEM_CREATED: {
        message: 'ITEM created',
        code: CREATED
    },
    OK: {
        message: 'OK',
        code: OK
    },
    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Email or password is not valid',
        code: BAD_REQUEST
    }
};
