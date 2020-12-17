const db = require('../../database').getInstance();

module.exports = {
    selectAllUsers: (where = {}, limit = 10, offset = 0) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');
        return User.findAll({
            where,
            limit,
            offset,
            include: Car
        });
    },
    selectUserById: (userId) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');
        return User.findByPk(userId, { include: Car });
    },
    insertUser: (user) => {
        const User = db.getModel('User');
        return User.create(user);
    },
    updateUser: (userId, user) => {
        const UserModel = db.getModel('User');
        return UserModel.update(
            { ...user },
            { returning: true, where: { id: userId } }
        );
    },
    deleteUser: (userId) => {
        const User = db.getModel('User');
        return User.destroy({
            where: {
                id: userId
            }
        });
    },
    findUserByParams: (findObj) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: findObj
        });
    }

};
