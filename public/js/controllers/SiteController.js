angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  $scope.enviarPedido = function(form){

    var pedido = {
      nome: form.nome,
      telefone: form.telefone,
      celular: form.celular,
      endereco: form.endereco,
      referencia: form.referencia,
      pedido: form.pedido,
      valor: form.valor,
      hora: form.hora,
      data: form.data
    };

    $http.post('http://localhost:3000/api/pedidos', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });
  };

}]);
