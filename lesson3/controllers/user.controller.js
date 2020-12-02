const {userService} = require('../services')

module.exports = {
    createUser: (req, res) => {
        try {
            userService.insertUser(req.body)
            res.status(201).json('User created')
        } catch (e) {
            res.status(400).json(e.message)
        }
    },

    getUsers: (req, res) => {
        try {
            const query = req.query
            const users = userService.findUser(query)
            res.status(200).json(users)
        } catch (e) {
            res.status(400).json(e.message)
        }

    },
    getUserById: (req, res) => {
        console.log(req.params);
        try {
            const {user_id} = req.params
            if (user_id < 0) {
                throw new Error('user id must by grater than zero')
            }
            const user = userService.findUserById(user_id);
            if (!user)
                throw new Error('user not found')
            res.status(200).json(user)
        } catch (e) {
            res.status(400).json(e.message)
        }
    },

    deleteUser: (req, res) => {
        try {
            const {user_id} = req.params
            const user = userService.deleteUserById(user_id);
            if (!user)
                throw new Error('user not found')
            res.status(200).json('User was deleted')
        } catch (e) {
            res.status(400).json(e.message)
        }
    }
}



