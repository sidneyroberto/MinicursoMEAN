var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        numeroPaginas: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: '{VALUE} não é inteiro!'
            }
        },
        quantidadeEmEstoque: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: '{VALUE} não é inteiro!'
            }
        },
        precoUnitario: {
            type: Number,
            required: true
        }
    });
    
    return mongoose.model('Livro', schema);
};