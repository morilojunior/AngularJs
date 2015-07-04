
//Para definir Rotas utilizamos o módulo 'ngRouter' como dependência
var serviceApp = angular.module('Router', ['ngRouter']);


//Defini as rotas da aplicação
serviceApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/states', { templateUrl: '../html/list.html', controller: 'controllerRouter'}).
            when('/create', { templateUrl: '../html/create.html', controller: 'controllerRouter'}).
            when('/delete', { templateUrl: '../html/list.html', controller: 'controllerRouter'}).
            otherwise({
                redirectTo: '/states'
            });
    }
]);



<!-- Defini um Serviço em que eu posso reutilizar entre os controles -->

serviceApp.service('statesService', function($http){

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
        states.push({
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
        $location.path('#states'); //O location redireciona
    };

    $scope.deleteState = function(index) {
        statesService.removeStateFromCollection(index);
        $location.path('#states');
    };
});