module.exports = {
    checkUserValidity: (req, res, next) => {
        try {
            const user = req.body
            const isLogged = false

            if (!user.email || !user.password) {
                throw new Error('user is not valid')
            }

            req.login=isLogged
            next()
        } catch (e) {
            res.json(e.message);
        }
    }
}