angular.module('livraria').factory('Livro', function($resource) {
    return $resource('/livros/:id');
});
