module.exports = {
    checkProductValidity: (req, res, next) => {
        try {
            const product = req.body;
            if (!product.name || !product.price || !product.description || !product.brand) {
                throw new Error('product is not valid');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
