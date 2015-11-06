
//Para definir Rotas utilizamos o módulo 'ngRouter' como dependência
var serviceApp = angular.module('Router', ['ngRoute']);


//Defini as rotas da aplicação
serviceApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/states', { templateUrl: '/html/aula10-List.html', controller: 'controllerRouter'}).
            when('/create', { templateUrl: '/html/aula10-Create.html', controller: 'controllerRouter'}).
            when('/delete', { templateUrl: '/html/aula10-List.html', controller: 'controllerRouter'}).
            otherwise({
                redirectTo: '/states'
            });
        $locationProvider.html5Mode(true);
    }
]);

// habilita CORS
serviceApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

<!-- Defini um Serviço em que eu posso reutilizar entre os controles -->

serviceApp.service('statesService', function($http, $rootScope){

    //private
    var states = {};

    //public
    this.getLetters = function(){
        return "abcdefghijlmnopqrst";
    };

    this.getToday = function(){
        return new Date();
    };

    this.addStateInToCollection = function(estado, capital, renda) {
        $rootScope.states.push({
            name: estado,
            capital: capital,
            renda: renda
        });
    }

    //requisição feita para um mock de API para pegar os estados

    this.getStates = function(callback) {
        // Este endereço de API é um mock feito no Apiary
        $http.get('http://private-2680f-state1.apiary-mock.com/states').success(callback);
    }
});


//Inicializar a aplicação
serviceApp.run(function($rootScope, statesService){
    //carrega os estados
    statesService.getStates(function(data){
       $rootScope.states = data
    });
});


//----- Aqui Criamos o controler ------

serviceApp.controller('controllerRouter', function($scope, $location, statesService){

    $scope.filtro = "";

    $scope.today = statesService.getToday();
    $scope.letras = statesService.getLetters();

    $scope.addState = function(){
        statesService.addStateInToCollection($scope.estado, $scope.capital, 1000);
        $location.path('states'); //O location redireciona
    };

    $scope.deleteState = function(index) {
        statesService.removeStateFromCollection(index);
        $location.path('states');
    };
});