const ProductsDAOArchivo = require('../daos/products/ProductsDAOArchivo')
const CartsDAOArchivo = require('../daos/carts/CartsDAOArchivo')
const ProductsDAOMemoria = require('../daos/products/ProductsDAOMemoria')
const CartsDAOMemoria = require('../daos/carts/CartsDAOMemoria')
const ProductsDAOMongoDB = require('../daos/products/ProductsDAOMongoDB')
const CartsDAOMongoDB = require('../daos/carts/CartsDAOMongoDB')
const ProductsDAOFirebase = require('../daos/products/ProductsDAOFireBase')
const CartsDAOFirebase = require('../daos/carts/CartsDAOFirebase')


const getStorage = () => {
    const storage = process.env.STORAGE || 'archivo'
    switch (storage) {
        case 'archivo':
            return {
                products: new ProductsDAOArchivo(),
                carts: new CartsDAOArchivo()
            }
            break
        case 'memoria':
            return {
                products: new ProductsDAOMemoria(),
                carts: new CartsDAOMemoria()
            }
            break
        case 'mongodb':
            return {
                products: new ProductsDAOMongoDB(),
                carts: new CartsDAOMongoDB()
            }
            break
        case 'firebase':
            return {
                products: new ProductsDAOFirebase(),
                carts: new CartsDAOFirebase()
            }
            break
        default:
            return {
                products: new ProductsDAOArchivo(),
                carts: new CartsDAOArchivo()
            }
            break
    }

}


module.exports = getStorage