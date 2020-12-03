const { productService } = require('../services');

module.exports = {
    createProduct: (req, res) => {
        try {
            productService.insertProduct(req.body);
            res.status(201).json('product was created');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getProducts: (req, res) => {
        try {
            const product = productService.findProduct();
            res.status(200).json(product);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getProductById: (req, res) => {
        try {
            const { id } = req.params;
            const product = productService.findProductById(id);
            res.status(200).json(product);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteProduct: (req, res) => {
        try {
            const { id } = req.params;
            const products = productService.deleteProductById(id);
            res.status(200).json(products);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
