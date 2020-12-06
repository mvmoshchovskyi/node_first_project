const db = require('../dataBase').getInstance();

module.exports = {

    createUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },

    getAllUsers: () => {
        const UserModel = db.getModel('User');
        return UserModel.findAll();
    },

    getUserById: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.findAll({
            where: { id: userId },
        });
    },

    updateUser: (userId, user) => {
        const UserModel = db.getModel('User');
        return UserModel.update(
            { ...user },
            { returning: true, where: { id: userId } }
        );
    },

    deleteUser: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: { id: userId }
        });
    },
};
