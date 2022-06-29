const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/desafio10'

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection