const dataBase = require('../dataBase/product')

module.exports = {
    findProduct: () => dataBase,
    insertProduct: (product) => dataBase.push(product),
    findProductById: (product_id) => dataBase[product_id],
    deleteProductById:(product_id) => dataBase[product_id]
}