const mongoose = require('mongoose')
mongoose.Promise = global.Promise   // Para evitar msg de "deprecated" ref mongoose.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')


