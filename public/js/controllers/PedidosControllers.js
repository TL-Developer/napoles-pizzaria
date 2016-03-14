angular.module('napoles').controller('PedidosControllers',['$scope','$http', function($scope, $http){

  $scope.pedidos = [];

  $http.get('/api/pedidos').then(function(pedidos){
    $scope.pedidos = pedidos.data;
  });

  $scope.cozinhas = [];

  $http.get('/api/cozinhas').then(function(cozinha){
    $scope.cozinhas = cozinha.data;
  });

  $scope.fazer = function(pedido){
    $scope.fazendo.push(pedido);
    console.log($scope.fazendo);
  };


  $scope.entregas = [];

  $http.get('/api/entregas').then(function(entrega){
    $scope.entregas = entrega.data;
  });

}]);
