const { Router } = require('express');
const { productController } = require('../controllers');
const { productMiddleware } = require('../middlewares');

const productRouter = Router();

productRouter.post('/', productMiddleware.checkProductValidity, productController.createProduct);

productRouter.get('/', productController.getProducts);

productRouter.get('/:id', productController.getProductById);

productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;
