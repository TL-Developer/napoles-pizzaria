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
      hora: form.hora,
      data: form.data
    };

    $http.post('https://napoles-pizzaria.herokuapp.com/api/pedidos', {
      nome: 'Tiago lima',
      telefone: '255555555',
      celular: '999999999',
      endereco: 'av.oliveira freire, 25',
      referencia: 'ao lado do extra',
      pedido: '1 pizza de calabresa com catupiry',
      valor: '250',
      hora: '17:56',
      data: '15/03/2016'
    }).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });


  };

}]);
