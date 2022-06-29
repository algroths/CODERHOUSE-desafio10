const ContenedorMongoDB = require('../../containers/ContenedorMongoDB')
const db = require('../../db/mongoDB')
const cartsModel = require('../../models/carts')

class CartsDAOMongoDB extends ContenedorMongoDB {
    constructor() {
        super(db, cartsModel)
    }
}

module.exports = CartsDAOMongoDB