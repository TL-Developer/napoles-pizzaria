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

  $scope.toCozinha = function(pedido){

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
  listaEntregas();
  socket.on('novoPedidoEntrega', function(cozinha){
    listaEntregas();
  });

  $scope.toEntrega = function(pedido){

    $http.post('/api/entregas', pedido).success(function(data, status){
      console.log('Enviado para entrega!');
    });

    // $http.delete('/api/cozinhas/' + pedido._id)
    // .then(
    //    function(response){
    //     listaCozinhas();
    //     console.log('Pedido da cozinha removido com sucesso!');
    //    },
    //    function(response){
    //      console.log('Não foi possível remover o pedido da cozinha');
    //    }
    // );
  };

}]);
