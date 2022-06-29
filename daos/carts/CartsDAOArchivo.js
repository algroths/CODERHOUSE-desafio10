const ContenedorArchivo = require('../../containers/ContenedorArchivo')

class CartsDAOArchivo extends ContenedorArchivo {
    constructor() {
        super('carts.txt')
    }
}


module.exports = CartsDAOArchivo