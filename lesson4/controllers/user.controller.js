const userService = require('../services/user.service');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { email, password, name } = req.body;
            const user = await userService.createUser({ email, password, name });
            res.status(201).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { userId } = req.params;
            const findUser = await userService.getUserById(userId);
            res.status(200).json(findUser);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = req.body;
            // eslint-disable-next-line no-unused-vars
            const [updatedUser] = await userService.updateUser(userId, user);
            res.status(200).json('User was updated');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);
            res.status(200).json('User was deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
