module.exports = function(app) {
    var controller = app.controllers.livro;
    
    app.route('/livros')
        .get(controller.listaLivros)
        .post(controller.salvaLivro);
    app.route('/livros/:id')
        .get(controller.obtemLivro)
        .delete(controller.removeLivro);
};