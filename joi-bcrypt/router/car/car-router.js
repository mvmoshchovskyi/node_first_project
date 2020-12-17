const { Router } = require('express');

const { carController } = require('../../controller');

const carRouter = Router();

carRouter.post('/', carController.createCar);

module.exports = carRouter;
