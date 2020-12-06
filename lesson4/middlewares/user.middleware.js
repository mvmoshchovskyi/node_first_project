const db = require('../dataBase').getInstance();

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
            const UserModel = db.getModel('User');
            const findEmail = await UserModel.findAll({
                where: {
                    email
                }
            });
            if (findEmail.length) throw new Error('This user is already registered');
            next();
        } catch (e) {
            res.status(400)
                .json(e.message);
        }
    },

    checkUserExist: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const UserModel = db.getModel('User');
            const findUser = await UserModel.findAll({
                where: { id: userId },
            });
            if (!findUser.length) throw new Error('This user is not registered.');
            next();
        } catch (e) {
            res.json(e.message);
        }
    },
};
