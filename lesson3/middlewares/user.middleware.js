module.exports = {
    checkUserValidity: (req, res, next) => {
        try {
            const user = req.body;
            if (!user.email || !user.password) {
                throw new Error('user is not valid');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
