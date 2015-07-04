<!-- Carrega o Módulo -->
var serviceApp = angular.module('Servicos', []);

<!-- Defini a função para o controller-->
//serviceApp.controller('aula8Controller', function aula8Controller($scope) {

<!-- Defini um Serviço em que eu posso reutilizar entre os controles -->

serviceApp.service('statesService', function(){

    //private
    var states = [{
        name:"Minas Gerais",
        capital:"Belo Horizonte",
        renda: 2000
    }, {
        name:'São Paulo',
        capital:'São Paulo',
        renda: 2000
    }, {
        name:"Paraíba",
        capital:"João Pessoa",
        renda: 2000
    }, {
        name:"Rio de Janeiro",
        capital:"Rio de Janeiro",
        renda: 2000
    }];

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

    this.getStates = function() {
        return states;
    }
});

//----- Aqui Criamos o controler ------

serviceApp.controller('controllerServicos', function($scope, statesService){

    $scope.filtro = "";
    $scope.states = statesService.getStates();
    $scope.today = statesService.getToday();
    $scope.letras = statesService.getLetters();

    $scope.addState = function(){
        statesService.addStateInToCollection($scope.estado, $scope.capital, 1000);
        $scope.estado = '';
        $scope.capital = '';
    };
});