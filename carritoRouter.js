const { Router } = require('express')
const { products: productsContainer } = require('./daos')()
const { carts: cartsContainer } = require('./daos')()

let obj =
{
    _id: 1,
    timestamp: Date.now(),
    productos: []
}


    ; (async () => {

        await cartsContainer.save(obj);

    })();


const carritoRouter = Router()

carritoRouter.post('', async (req, res) => {
    return res.json(await cartsContainer.save(req.body))
})

carritoRouter.get('/:id/productos', async (req, res) => {
    let carrito = await cartsContainer.getByid(+req.params.id)
    return res.json(carrito.productos)
})

carritoRouter.delete('/:id', async (req, res) => {
    return res.json(await cartsContainer.deleteById(+req.params.id))
})

carritoRouter.post('/:id/productos', async (req, res) => {
    const id = +req.body.id
    const producto = await productsContainer.getByid(id)
    const carrito = await cartsContainer.getByid(+req.params.id)
    carrito[0].productos.push(producto[0])
    cartsContainer.update(carrito[0], +req.params.id)

    return res.status(201).json({})
})

carritoRouter.delete('/:id/productos/:id_prod', async (req, res) => {
    const carrito = await cartsContainer.getByid(+req.params.id)
    const index = carrito[0].productos.findIndex(e => e._id === +req.params.id_prod)
    if (index != -1) {
        carrito[0].productos.splice(index, 1)
        cartsContainer.update(carrito[0], +req.params.id)
    }
    return res.json()
})



module.exports = carritoRouter
