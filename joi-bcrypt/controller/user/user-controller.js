const { userService } = require('../../service');
const { errors: { OK, ITEM_CREATED } } = require('../../error');
const { hash } = require('../../utils/password-helper');

module.exports = {
    findAllUsers: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);
            const users = await userService.selectAllUsers(where, +limit, +offset);
            res.status(OK.code).json(users);
        } catch (e) {
            next(e);
        }
    },
    findUserById: (req, res, next) => {
        try {
            res.status(OK.code).json(req.user);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);
            Object.assign(req.body, { password });
            await userService.insertUser(req.body);
            res.status(ITEM_CREATED.code).json(ITEM_CREATED.message);
        } catch (e) {
            next(e);
        }
    },
    updateUserById: async (req, res, next) => {
        try {
            await userService.updateUser(req.user.id, req.body);
            res.status(ITEM_CREATED.code).json(ITEM_CREATED.message);
        } catch (e) {
            next(e);
        }
    },
    deleteUserById: async (req, res, next) => {
        try {
            await userService.deleteUser(req.user.id);
            res.status(OK.code).json(OK.message);
        } catch (e) {
            next(e);
        }
    }
};
