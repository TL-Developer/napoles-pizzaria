angular.module('napoles').controller('PedidosControllers',['$scope','$http', function($scope, $http){


  var socket = io();


  // PEDIDOS
  $scope.pedidos = [];

  var listaPedidos = function(){
    $http.get('/api/pedidos').then(function(pedidos){
      $scope.pedidos = pedidos.data;
    });
  };
  listaPedidos();

  // COZINHA
  $scope.cozinhas = [];

  var listaCozinhas = function(){
    $http.get('/api/cozinhas').then(function(cozinha){
      $scope.cozinhas = cozinha.data;
    }, function(erro){
      console.log('Não foi possível listar as cozinhas');
      console.log(erro);
    });
  };
  listaCozinhas();

  socket.on('novoPedidoCozinha', function(cozinha){
    listaCozinhas();
  });

  $scope.cozinha = function(pedido){

    // $http.delete('/pedidos/' + pedido._id)
    // .then(
    //    function(response){
    //     listaPedidos();
    //    },
    //    function(response){
    //      console.log('Não foi possível remover o pedido');
    //    }
    // );

    $http.post('/api/cozinhas', pedido).success(function(data, status){
      console.log('Enviado para cozinha!');
    });

  };


  // ENTREGA
  $scope.entregas = [];

  var listaEntregas = function(){
    $http.get('/api/entregas').then(function(entrega){
      $scope.entregas = entrega.data;
    });
  };

}]);
