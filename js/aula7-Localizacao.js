<!-- Carrega o Módulo -->
var mvcApp = angular.module('mvcApp', []);

<!-- Defini a função para o controller-->
mvcApp.controller('aula6Controller', function aula6Controller($scope) {

    <!-- Definindo a fonte dos Dados (Json) -->
    $scope.states = [
        {name:"Minas Gerais", capital:"Belo Horizonte", renda: 2000},
        {name:'São Paulo', capital:'São Paulo', renda: 2000},
        {name:"Paraíba", capital:"João Pessoa", renda: 2000},
        {name:"Rio de Janeiro", capital:"Rio de Janeiro", renda: 2000},
    ];

    <!-- Definindo uma função-->
    $scope.addState = function() {
        $scope.states.push({name: $scope.estado, capital: $scope.capital, renda: 1000});
        $scope.estado = '';
        $scope.capital = '';
    }

    $scope.data = new Date();
});