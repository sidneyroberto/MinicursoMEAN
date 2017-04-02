angular.module('livraria', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
        $routeProvider.when('/livros', {
            templateUrl: 'partials/livros.html',
            controller: 'LivrosController'
        });
    
        $routeProvider.when('/livro/:livroId', {
			templateUrl: 'partials/livro.html',	
			controller: 'LivroController'
		});
		
		$routeProvider.when('/livro', {
			templateUrl: 'partials/livro.html',
			controller: 'LivroController'
		});
    
        $routeProvider.otherwise({redirectTo: '/livros'});
    }
);