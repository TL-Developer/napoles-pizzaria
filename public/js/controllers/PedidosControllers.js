angular.module('napoles').controller('PedidosControllers',['$scope','$http','$timeout', function($scope, $http, $timeout){


  var socket = io();

  $scope.mensagem = '';

  // PEDIDOS
  $scope.pedidos = [];

  // FUNÇÃO DE LISTAR PEDIDOS
  var listaPedidos = function(){
    $http.get('/api/pedidos').then(function(pedidos){
      $scope.pedidos = pedidos.data;
    });
  };
  listaPedidos();

  // REALTIME NOVO PEDIDO NA COZINHA
  socket.on('novoPedido', function(pedidos){
    listaPedidos();
  });

  // FUNÇÃO QUE DELETE O PEDIDO DO PEDIDOS
  $scope.rmPedidos = function(pedido){
    $http.delete('/api/pedidos/' + pedido._id)
    .then(
       function(response){
        listaPedidos();
        console.log('Pedido da cozinha removido com sucesso!');
       },
       function(response){
         console.log('Não foi possível remover o pedido da cozinha');
       }
    );
  };

  // FUNÇÃO QUE MANDA PEDIDO PARA COZINHA
  $scope.toCozinha = function(pedido){

    $http.post('/api/cozinhas', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });

    $scope.rmPedidos(pedido);
  };

  // COZINHA
  $scope.cozinhas = [];

  // FUNÇÃO QUE LISTA PEDIDOS NA COZINHA
  var listaCozinhas = function(){
    $http.get('/api/cozinhas').then(function(cozinha){
      $scope.cozinhas = cozinha.data;
    }, function(erro){
      console.log('Não foi possível listar as cozinhas');
      console.log(erro);
    });
  };
  listaCozinhas();

  // REALTIME NOVO PEDIDO NA COZINHA
  socket.on('novoPedidoCozinha', function(cozinha){
    listaCozinhas();
  });

  // FUNÇÃO QUE DELETE O PEDIDO DA COZINHA
  $scope.rmPedidoCozinha = function(pedido){
    $http.delete('/api/cozinhas/' + pedido._id)
    .then(
       function(response){
        listaCozinhas();
        console.log('Pedido da cozinha removido com sucesso!');
       },
       function(response){
         console.log('Não foi possível remover o pedido da cozinha');
       }
    );
  };

  // FUNÇÃO QUE MANDA PEDIDO PARA ENTREGA
  $scope.toEntrega = function(pedido){

    $http.post('/api/entregas', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para entrega!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });

    $scope.rmPedidoCozinha(pedido);
  };


  // ENTREGA
  $scope.entregas = [];

  // FUNÇÃO QUE LISTA PEDIDOS NA ENTRA
  var listaEntregas = function(){
    $http.get('/api/entregas').then(function(entrega){
      $scope.entregas = entrega.data;
    });
  };

  listaEntregas();

  // REALTIME NOVO PEDIDO NA ENTREGA
  socket.on('novoPedidoEntrega', function(cozinha){
    listaEntregas();
  });

  // FUNÇÃO QUE DELETA O PEDIDO DA ENTREGA
  $scope.rmPedidoEntrega = function(pedido){
    $http.delete('/api/entregas/' + pedido._id)
    .then(
       function(response){
        listaEntregas();
        $scope.mensagem = 'Pedido realizado com sucesso!';
        $timeout(function(){
          $scope.mensagem = '';
        }, 2000);
       },
       function(response){
         console.log('Não foi possível remover o pedido da cozinha');
       }
    );
  };

  // FUNÇÃO ARQUIVO OS PEDIDOS FEITOS
  $scope.toPedidoSuccess = function(pedido){
    $scope.rmPedidoEntrega(pedido);
  };

}]);
