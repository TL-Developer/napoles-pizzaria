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

    // $http.post('https://napoles-pizzaria.heroku.com/api/pedidos', pedido).success(function(data, status){
    //   $scope.mensagem = 'Enviado para cozinha!';
    //   $timeout(function(){
    //     $scope.mensagem = '';
    //   }, 2000);
    // });

    $.ajax({
      method: "POST",
      url: 'https://napoles-pizzaria.heroku.com/api/pedidos',
      data: {
        nome: form.nome,
        telefone: form.telefone,
        celular: form.celular,
        endereco: form.endereco,
        referencia: form.referencia,
        pedido: form.pedido,
        valor: form.valor,
        hora: form.hora,
        data: form.data
      },
      success: function(resposta){
        $scope.mensagem = 'Enviado para cozinha!';
        $timeout(function(){
          $scope.mensagem = '';
        }, 2000);
      },
      error: function(erro){
        console.log(erro);
      }
    });

  };

}]);
