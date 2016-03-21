angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  // LISTANDO API DE PIZZAS DO SISTEMA
  $http({
      method: 'GET',
      url: 'http://napoles-pizzaria.herokuapp.com/api/pizzas'
   }).success(function(data){
       console.log(data);
  }).error(function(err){
      console.log(err);
  });

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
    $http.post('https://napoles-pizzaria.herokuapp.com/api/pedidos', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });

  };
}]);
