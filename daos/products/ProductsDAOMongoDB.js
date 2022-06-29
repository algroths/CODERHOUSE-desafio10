const ContenedorMongoDB = require('../../containers/ContenedorMongoDB')
const db = require('../../db/mongoDB')
const productsModel = require('../../models/products')

class ProductsDAOMongoDB extends ContenedorMongoDB {
    constructor() {
        super(db, productsModel)
    }
}

module.exports = ProductsDAOMongoDB