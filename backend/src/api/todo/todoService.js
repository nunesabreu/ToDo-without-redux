const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({
    new: true, // Quando um registro for atualizado, o retorno será o próprio registro atualizado e não o antigo
    runValidators: true // Configura validação para os updates (senão o mongoose não faz)
})

module.exports = Todo