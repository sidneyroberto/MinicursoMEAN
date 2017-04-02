angular.module('livraria').controller('LivrosController', 
    function($scope, $window, Livro) {
        $scope.livros = []
        $scope.filtro = '';
        $scope.mensagem = {};
        
        function buscaLivros() {
            Livro.query(
                function(livros) {
                    $scope.livros = livros;
                    $scope.mensagem = {};
                },
                function(erro) {
                    console.log(erro);
                    $scope.mensagem = {texto : 'Não foi possível recuperar a lista de livros.'};
                }
            );
        }
        buscaLivros();
     
        $scope.remove = function(livro) {
            if($window.confirm("Deseja realmente remover o livro '" + livro.titulo + "'?")) {
                Livro.delete(
                    {id: livro._id},
                    buscaLivros,
                    function(erro) {
                        console.log(erro);
                        $scope.mensagem = {texto : 'Não foi possível remover o livro!'};
                    }
                );
            }
        }
    }
);
