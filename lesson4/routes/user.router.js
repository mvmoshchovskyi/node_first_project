const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', userMiddleware.checkData, userMiddleware.checkEmail, userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:userId', userMiddleware.checkUserExist, userController.getUserById);
userRouter.put('/:userId', userMiddleware.checkUserExist, userController.updateUser);
userRouter.delete('/:userId', userMiddleware.checkUserExist, userController.deleteUser);

module.exports = userRouter;
