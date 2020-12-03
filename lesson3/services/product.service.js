const data = require('../dataBase/dataBase');

const { products } = data;

module.exports = {
    findProduct: () => products,
    insertProduct: (product) => products.push(product),
    findProductById: (id) => products.find((product) => product.id === id),
    deleteProductById: (id) => products.filter((product) => product.id !== id)
};
