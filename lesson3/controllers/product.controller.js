const {productService} = require('../services')

module.exports = {
    createProduct: (req, res) => {
        try {
            productService.insertProduct(req.body)
            res.status(201).json('product was created')
        } catch (e) {
            res.status(400).json(e.message)
        }
    },

    getProducts: (req, res) => {
        try {
            const query = req.query
            const product = productService.findProduct()
            res.status(200).json(product)
        } catch (e) {
            res.status(400).json(e.message)
        }

    },
    getProductById: (req, res) => {
        try {
            const {product_id} = req.params
            const product = productService.findProductById(product_id);
            if (!product || !product_id) {
                throw new Error('product not found')
            }
            res.status(200).json(product)
        } catch (e) {
            res.status(400).json(e.message)
        }
    },

    deleteProduct: (req, res) => {
        try {
            const {product_id} = req.params
            const product = productService.deleteProductById(product_id);
            if (!product || !product_id) {
                throw new Error()  }
            const deleteProduct = product.remove()
            res.status(200).json(`product  was deleted`)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }
}
