const express = require('express')

module.exports = function(server) {

    // API routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // Os métodos declarados em todoService.js serão utilizados em /api/todos
}