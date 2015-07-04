<!-- Carrega o Módulo -->
var mvcApp = angular.module('mvcApp', []);

<!-- Defini a função para o controller-->
mvcApp.controller('aula4Controller', function aula4Controller($scope) {

    <!-- Definindo a fonte dos Dados (Json) -->
    $scope.states = [
        {name:"Minas Gerais", capital:"Belo Horizonte"},
        {name:'São Paulo', capital:'São Paulo'},
        {name:"Paraíba", capital:"João Pessoa"},
        {name:"Rio de Janeiro", capital:"Rio de Janeiro"},
    ];

    <!-- Definindo uma função-->
    $scope.addState = function() {
        $scope.states.push({name: $scope.estado, capital: $scope.capital});
        $scope.estado = '';
        $scope.capital = '';
    }

    $scope.incrementa = function() {
        $scope.contador = $scope.contador + 1;
    };

    $scope.gostei = false;
    $scope.escondido = false;
    $scope.contador = 0;
});