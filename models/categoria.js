"use strict";

const sequelize = require("./index");
const S = require("sequelize");

class Categoria extends S.Model { }

Categoria.init({
    nombre: {
        type: S.STRING
    }
}, { sequelize, modelName: "categoria" })

module.exports = { Categoria }