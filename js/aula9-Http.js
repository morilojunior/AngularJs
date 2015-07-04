<!-- Carrega o Módulo -->
var serviceApp = angular.module('Http', []);

// O Angular já tem seus próprios serviços, alguns deles:
// $http,
// $resouce,
// $route,
// $cookies,
// $animate
// É só injetar no controller o serviço

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

//----- Aqui Criamos o controler ------

serviceApp.controller('controllerHttp', function($scope, statesService){

    $scope.filtro = "";
    statesService.getStates(function(data){
        console.log(data);
        $scope.states = data;
    });

    $scope.today = statesService.getToday();
    $scope.letras = statesService.getLetters();

    $scope.addState = function(){
        statesService.addStateInToCollection($scope.estado, $scope.capital, 1000);
        $scope.estado = '';
        $scope.capital = '';
    };
});