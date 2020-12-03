const data = require('../dataBase/dataBase');

const { users } = data;

module.exports = {
    findUser: () => users,
    insertUser: (user) => users.push(user),
    findUserById: (email) => users.find((user) => user.email === email),
    deleteUserById: (id) => users.filter((user) => user.id.toString() !== id),
};
