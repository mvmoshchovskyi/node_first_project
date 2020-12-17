const { userService } = require('../../service');
const { ErrorHandler, errors: { EMAIL_ALREADY_USED, NO_SUCH_USER } } = require('../../error');

module.exports = {
    chekIsUserRegisteredByEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await userService.selectAllUsers({ email }, 1);
            if (user) {
                throw new ErrorHandler(EMAIL_ALREADY_USED.message, EMAIL_ALREADY_USED.code);
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    chekIsUserRegisteredById: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = await userService.selectUserById(userId);
            if (!user) {
                throw new ErrorHandler(NO_SUCH_USER.message, NO_SUCH_USER.code);
            }
            req.user = user;
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
