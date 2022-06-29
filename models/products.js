const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
    _id: { type: Number, require: true },
    timestamp: { type: Date, require: true },
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    codigo: { type: Number, required: true },
    url: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true }
})

module.exports = model('Products', productsSchema)