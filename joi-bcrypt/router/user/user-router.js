const { Router } = require('express');

const { userMiddleware, validationMiddleware } = require('../../middleware');
const { userController } = require('../../controller');

const userRouter = Router();

userRouter.get('/', userController.findAllUsers);
userRouter.post('/', validationMiddleware.isUserCreateCorrect, userController.createUser);
userRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, validationMiddleware.isIdCorrect,
    userMiddleware.chekIsUserRegisteredById, userController.updateUserById);
userRouter.use('/:userId', validationMiddleware.isIdCorrect, userMiddleware.chekIsUserRegisteredById,);
userRouter.get('/:userId', userController.findUserById);
userRouter.delete('/:userId', userController.deleteUserById);

module.exports = userRouter;
