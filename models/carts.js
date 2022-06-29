const { Schema, model } = require('mongoose')

const cartsSchema = new Schema({
    _id: { type: Number, require: true },
    timestamp: { type: Date, require: true },
    productos: { type: Array }
})

module.exports = model('Carts', cartsSchema)