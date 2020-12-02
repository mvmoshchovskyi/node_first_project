module.exports = {
    checkEmailAndPassword: (req, res, next) => {
        try {
            const user = req.body;
            if (!user.email || !user.password) {
                throw new Error('Email amd password should be not empty');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

};