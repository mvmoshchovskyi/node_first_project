const { userService } = require('../services');

module.exports = {
    createUser: (req, res) => {
        try {
            userService.insertUser(req.body);
            res.status(201).json('User created');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getAllUsers: (req, res) => {
        try {
            const { query } = req;
            const users = userService.findUser(query);
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getUserByEmail: (req, res) => {
        try {
            const { email } = req.params;
            const user = userService.findUserById(email);
            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const { id } = req.params;
            const users = userService.deleteUserById(id);
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

};
