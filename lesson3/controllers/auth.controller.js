const {authService} = require('../services')

module.exports = {

    userLogin: (req, res) => {
        try {
            const email = req.body.email;
            const user = authService.findUser(email);
            if (user) {
                res.status(200).json(user);
            }
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    userRegister: (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const createdUser = user.save();
            res.status(200).json(createdUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}

