const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', userMiddleware.checkUserValidity, userController.createUser);

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:email', userController.getUserByEmail);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
