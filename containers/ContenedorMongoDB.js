class Contenedor {

    constructor(db, model) {
        this.db = db
        this.model = model
    }

    save(obj) {
        return this.db
            .then(_ => this.model.countDocuments())
            .then(count => obj._id = count + 1)
            .then(_ => this.model(obj))
            .then(item => item.save())
            .then(document => console.log('Saved', document))
            .catch(err => console.error(`Error: ${err.message}`))

    }

    getByid(id) {
        return this.db
            .then(_ => this.model.find({ '_id': id }))
            .catch(err => console.error(`Error: ${err.message}`))
    }

    getAll() {
        return this.db
            .then(_ => this.model.find())
            .catch(err => console.error(`Error: ${err.message}`))
    }

    deleteById(id) {
        return this.db
            .then(_ => this.model.deleteOne({ '_id': id }))
            .catch(err => console.error(`Error: ${err.message}`))
    }

    update(obj, id) {
        return this.db
            .then(_ => this.model.updateOne({
                _id: id
            }, {
                $set: obj
            }))
            .catch(err => console.error(`Error: ${err.message}`))
    }

}

module.exports = Contenedor;