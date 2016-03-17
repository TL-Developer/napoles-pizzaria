angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  $scope.enviarPedido = function(form){

    var data = new Date()
      , mes = data.getDay()
      , dia = data.getMonth()
      , ano = data.getFullYear()
      , hora = data.getHours()
      , minutos = data.getMinutes();

    var pedido = {
      nome: form.nome,
      telefone: form.telefone,
      celular: form.celular,
      endereco: form.endereco,
      referencia: form.referencia,
      pedido: form.pedido,
      valor: form.valor,
      bairro: form.bairro,
      cep: form.cep
    };

    // https://napoles-pizzaria.herokuapp.com/api/pedidos
    $http.post('https://napoles-pizzaria.herokuapp.com/api/pedidos/api/pedidos', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });

  };
}]);
