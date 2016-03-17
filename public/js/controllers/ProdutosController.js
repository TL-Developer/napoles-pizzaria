angular.module('napoles').controller('ProdutosController',['$scope','$http', function($scope, $http){

  // PIZZAS
  $scope.pizzas = [];
  $http.get('/api/pizzas').then(function(pizzas){
    $scope.pizzas = pizzas.data;
    console.log($scope.pizzas);
  }, function(erro){
    console.log('Não foi possível listar as pizzas');
  });

}]);
