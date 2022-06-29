const ContenedorFirebase = require('../../containers/ContenedorFirebase')
const db = require('../../db/firebase')
const query = db.collection('products')

class ProductsDAOFirebase extends ContenedorFirebase {
    constructor() {
        super(db, query)
    }
}

module.exports = ProductsDAOFirebase