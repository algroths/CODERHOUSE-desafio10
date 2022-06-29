const ContenedorFirebase = require('../../containers/ContenedorFirebase')
const db = require('../../db/firebase')
const query = db.collection('carts')

class CartsDAOFirebase extends ContenedorFirebase {
    constructor() {
        super(db, query)
    }
}

module.exports = CartsDAOFirebase