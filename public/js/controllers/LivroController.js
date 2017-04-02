angular.module('livraria').controller('LivroController',
    function($scope, $routeParams, Livro) {
        if($routeParams.livroId) {
           Livro.get(
               {id: $routeParams.livroId},
               function(livro) {
                   $scope.livro = livro;
                   $scope.tituloPagina = 'Editar livro';
               },
               function(erro) {
                   $scope.mensagem = {texto: 'Livro não existe. Novo livro.', sucesso : false};
                   console.log(erro);
               }
           ); 
        } else {
            $scope.livro = new Livro();
            $scope.tituloPagina = 'Novo livro';
        }
    
        $scope.salva = function() {
            $scope.livro.$save()
                .then(
                    function(livro) {
                        $scope.mensagem = {texto: 'Livro salvo com sucesso!', sucesso : true};
                        $scope.livro = new Livro();
                    },
                    function(erro) {
                        console.log(erro);
                        $scope.mensagem = {texto: 'Ocorreu um erro ao tentar salvar o livro.', sucesso : false};
                    }
                );    
        };
    
        // Validação de inteiros
        $scope.validaInteiros = '/^-?[0-9][^\.]*$/';
    }
);
