angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  // LISTANDO API DE PIZZAS DO SISTEMA
  $http.get('https://napoles-pizzaria.herokuapp.com/api/produtos/pizzas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg').then(function(data){
    console.log(data)
  }, function(err){
    console.log(err)
  })

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
      cep: form.cep,
      formaPg: form.formaPg,
      observacoes: form.observacoes
    };

    // https://napoles-pizzaria.herokuapp.com/api/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
    $http.post('/api/pedidos', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });

  };
}]);
