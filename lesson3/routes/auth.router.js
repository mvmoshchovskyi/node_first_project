const {Router} = require('express')
const {authController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

const authRouter = Router();

authRouter.post('/login',authMiddleware.checkEmailAndPassword,  authController.userLogin);
authRouter.post('/register',  authController.userRegister);


module.exports= authRouter



