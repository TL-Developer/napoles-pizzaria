angular.module('napoles').controller('PedidosControllers',['$scope','$http', function($scope, $http){

  $scope.pedidos = [];

  $http.get('/api/pedidos').then(function(pedidos){
    $scope.pedidos = pedidos.data;
  });

  $scope.fazendo = [];

  $scope.fazer = function(pedido){

    $scope.fazendo.push(pedido);
    console.log($scope.fazendo);

  };

}]);
