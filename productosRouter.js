const { Router } = require('express');
const { products: productsContainer } = require('./daos')()

let obj =
{
    _id: 1,
    timestamp: Date.now(),
    nombre: 'Producto1',
    descripcion: 'Este es el producto1',
    codigo: 142343,
    url: 'http:localhost:producto',
    precio: 21,
    stock: 7
}

    ; (async () => {

        await productsContainer.save(obj);

    })();


const productosRouter = Router()

let admin = true

const middlewareAdmin = (req, res, next) => {
    if (admin) {
        return next()
    }
    return res.json({ mensaje: "Usuario no permitido" })
}

productosRouter.get('', async (req, res) => {
    return res.json(await productsContainer.getAll())
})

productosRouter.get('/:id', async (req, res) => {
    return res.json(await productsContainer.getByid(+req.params.id))
})

productosRouter.post('', middlewareAdmin, async (req, res) => {
    await productsContainer.save(req.body)
    return res.status(201).json(await productsContainer.getAll())
})

productosRouter.put('/:id', middlewareAdmin, async (req, res) => {

    return res.json(await productsContainer.update(req.body, +req.params.id))
})

productosRouter.delete('/:id', middlewareAdmin, async (req, res) => {
    return res.json(await productsContainer.deleteById(+req.params.id))
})

module.exports = productosRouter



