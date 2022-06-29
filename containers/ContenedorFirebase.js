class Contenedor {

    constructor(db, query) {
        this.db = db
        this.query = query
    }

    async save(obj) {

        try {
            const doc = this.query.doc(`${obj._id}`)
            const product = await doc.set(obj)
            return product
        } catch (e) {
            console.error(`Error: ${e.message}`)
        }

    }

    async getByid(id) {
        const doc = this.query.doc(`${id}`)

        try {
            const response = await doc.get()
            const products = { ...response.data() }
            return products
        } catch (e) {
            console.error(`Error: ${e.message}`)
        }
    }

    async getAll() {
        try {
            const docs = await this.query.get()
            const products = docs.docs.map(doc => {
                return { ...doc.data() }
            })
            return products
        } catch (e) {
            console.error(`Error: ${e.message}`)
        }
    }

    async deleteById(id) {
        const doc = this.query.doc(`${id}`)

        try {
            const product = await doc.delete()
            console.log(product)
        } catch (e) {
            console.error(`Error: ${e.message}`)
        }
    }


    async update(obj, id) {
        const doc = this.query.doc(`${id}`)

        try {
            const product = await doc.update(obj)
            console.log(product)
        } catch (e) {
            console.error(`Error: ${e.message}`)
        }

    }

}

module.exports = Contenedor;