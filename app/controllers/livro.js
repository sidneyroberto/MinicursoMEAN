module.exports = function(app) {
    var controller = {};
    
    var Livro = app.models.livro;
    
    controller.listaLivros = function(req, res) {
        Livro.find().exec()
            .then(
                function(livros) {
                    res.json(livros);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
    controller.obtemLivro = function(req, res) {
        var _id = req.params.id;
        Livro.findById(_id).exec()
            .then(
                function(livro) {
                    if(!livro) {
                        res.status(404).json('Livro não encontrado!');
                    } else {
                        res.json(livro);
                    }
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
    controller.salvaLivro = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Livro.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function(livro) {
                        res.json(livro);
                    },
                    function(erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        } else {
            Livro.create(req.body)
                .then(
                    function(livro) {
                        res.status(201).json(livro);
                    },
                    function(erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        }
    };
    
    controller.removeLivro = function(req, res) {
        var _id = req.params.id;
        Livro.remove({"_id" : _id}).exec()
            .then(
                function() {
                    res.status(204).end();
                },
                function(erro) {
                    return console.error(erro);
                }
            );
    };
    
    return controller;
};
