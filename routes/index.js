const express = require("express");
const router = express.Router();
const S = require("sequelize")
const Producto = require("../models/producto");
const { Categoria } = require("../models/categoria")


//productos
router.get('/', (req, res, next) => {
    Producto.findAll()
        .then((producto) => {
            if (producto) {
                res.json(producto)
            }
        })
});

//productos/id
router.get('/:id', (req, res, next) => {
    Producto.findByPk(req.params.id).then((producto) => {
        producto ? res.json(producto) : res.sendStatus(404)
    })

});


router.post('/', (req, res, next) => {
    Producto.create(req.body)
        .then((producto) => {
            res.json(producto)
        })
})


router.put('/:id', (req, res, next) => {
    Producto.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((producto) => {
        res.send("funciono por ahora")
    })
})


router.delete('/:id', (req, res, next) => {
    Producto.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send("ha sido eliminado")
    })
})

module.exports = router