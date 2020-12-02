const dataBase = require('../dataBase/users')

module.exports = {
    findUser: () => dataBase,
    insertUser: (user) => dataBase.push(user),
    findUserById: (user_id) => dataBase[user_id],
    deleteUserById:(user_id)=>dataBase[user_id]
}