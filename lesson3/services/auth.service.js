const users = require('../dataBase/users')

module.exports = {
    findUser: (email) => {
        const user = users.find((user) => user.email === email);
        return user;
    }
}