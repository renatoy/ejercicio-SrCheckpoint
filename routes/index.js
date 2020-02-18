const express = require("express");
const router = express.Router();
const S = require("sequelize")
const Producto = require("../models/producto"); //ahora chi
const Categoria = require("../models/categoria")



router.get('/', (req, res, next) => {
    Producto.findAll()
        .then((producto) => {
            if (producto) {
                res.json(producto)
            }
            // res.sendStatus(404)
        })
});


// router.get('/:id', (req, res, next) => {
//     Producto.findByPk(req.params.id).then((producto) => {
//         producto ? res.json(producto) : res.sendStatus(404)
//     })

// });

// router.post('/', (req, res, next) => {
//     Producto.create({ producto: req.body.producto })
//         .then((producto) => {
//             res.json(producto)
//         })
// })

// router.put('/:id', (req, res, next) => {
//     update
// })

// router.delete('/:id', (req, res, next) => {

// })

module.exports = router