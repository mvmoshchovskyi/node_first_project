const userService = require('../services/user.service');

module.exports = {

    checkData: (req, res, next) => {
        try {
            const { email, password, name } = req.body;

            if (!email || email.length < 8) throw new Error('Email is not valid');

            if (!password || password.length < 6) throw new Error('Password is not valid');

            if (!name || name.length < 2) throw new Error('Name is not valid');

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const users = await userService.getAllUsers();
            const findEmail = users.find((user) => user.email === email);
            if (findEmail) throw new Error('User with this email already  exist');
            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkUserExist: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            if (!user.length) throw new Error('User is not exist ');
            next();
        } catch (e) {
            res.json(e.message);
        }
    },
};
