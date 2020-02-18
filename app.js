const express = require('express');
const Sequelize = require('sequelize');
const db = require('./models/index')
const routes = require('./routes/index')

// const pg = require('pg');
// const pghstore = require('pg-hstore');
// const path = require('path');

const Routes = require('./routes')

const app = express();

app.use('/productos', routes)

app.get('/', (req, res) => {
    res.redirect('/productos')
})

const port = 3000;

db.sync()
    .then(app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    }))
console.log("All models were synchronized successfully.")


module.exports = app