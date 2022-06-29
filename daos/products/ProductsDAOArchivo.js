const ContenedorArchivo = require('../../containers/ContenedorArchivo')

class ProductsDAOArchivo extends ContenedorArchivo {
    constructor() {
        super('products.txt')
    }
}


module.exports = ProductsDAOArchivo