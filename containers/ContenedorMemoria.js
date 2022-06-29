class Contenedor {

    constructor() {
        this.dataObj = [];
    }

    save(obj) {
        obj.id = this.dataObj.length + 1
        this.dataObj.push(obj)
        return obj.id;
    }

    getByid(id) {
        if (this.dataObjdataObj.find(e => e.id === id)) {
            return this.dataObj.find(e => e.id === id);
        } else {
            return -1;
        }
    }

    getAll() {
        return this.dataObj;
    }

    deleteById(id) {
        if (this.dataObj.find(e => e.id === id)) {
            this.dataObj.splice(id - 1, 1);
            for (let i = id - 1; i < this.dataObj.length; i++) {
                this.dataObj[i].id -= 1
            }
        } else {
            return -1;
        }
    }

    update(obj, id) {
        const productIndex = dataObj.findIndex(producto => producto.id === id)
        if (productIndex != -1) {
            this.dataObj[productIndex] = obj
            return dataObj[productIndex]
        }
        return -1
    }

}

module.exports = Contenedor;