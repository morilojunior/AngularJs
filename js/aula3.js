<!-- Carrega o Módulo -->
var mvcApp = angular.module('mvcApp', []);

<!-- Defini a função para o controller-->
mvcApp.controller('aula3Controller', function aula3Controller($scope) {

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
});