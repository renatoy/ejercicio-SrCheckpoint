"use strict";

const sequelize = require("./index");
const S = require("sequelize");
const { Categoria } = require('./categoria')

class Producto extends S.Model { }

Producto.init({
    nombre: {
        type: S.STRING
    },
    precio: {
        type: S.INTEGER
    },
    descripcion: {
        type: S.TEXT
    },
    disponible: {
        type: S.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        // set() {
        //     if (algo) {
        //         //AGREGARLE EL STRING "NO DISPONIBLE" AL NOMBRE DEL PRODUCTO
        //     }
        // }
    },
    truncarDescripcion: {
        type: S.VIRTUAL,
        get() {
            if (this.descripcion) {
                return `${this.descripcion.slice(0, 20)}...`
            }
        }

    },

}, { sequelize, modelName: "producto" });

Producto.belongsTo(Categoria, { as: "categoria" })

Producto.addHook('beforeCreate', (producto, options) => {
    if (producto.disponible == false) {
        producto.nombre = `${producto.nombre} NO DISPONIBLE`
    }
})



module.exports = Producto 