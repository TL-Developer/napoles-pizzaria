angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

  // LISTANDO API DE PIZZAS DO SISTEMA
  $http.get('https://napoles-pizzaria.herokuapp.com/api/produtos/pizzas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg').then(function(data){
    console.log(data)
  }, function(err){
    console.log(err)
  });


  const pedido = {};

  // DADOS DE ENDEREÇO
  $scope.bairros = [
    'jd.helena',
    'São miguel'
  ];

  $scope.getCep = function(cep){

    // AJAX CEP
    $.getJSON("//viacep.com.br/ws/"+cep+"/json/?callback=?", function(dados) {
      if (!("erro" in dados)) {
        //Atualiza os campos com os valores da consulta.
        $scope.endereco = dados.logradouro;
        $scope.cidade = dados.localidade;
        $scope.uf = dados.uf;
      }else {
        //CEP pesquisado não foi encontrado.
        alert("CEP não encontrado.");
      }
    });

  };

  // ENVIANDO ENDEREÇO
  $scope.enviaEndereco = function(form){

    // nome: form.nome,
    // telefone: form.telefone,
    // celular: form.celular,
    // endereco: form.endereco,
    // referencia: form.referencia,
    // pedido: form.pedido,
    // valor: form.valor,
    // bairro: form.bairro,
    // cep: form.cep,
    // formaPg: form.formaPg,
    // observacoes: form.observacoes

    pedido.bairro = form.bairro;
    pedido.cep = form.cep;
    pedido.cidade = form.cidade;
    pedido.uf = form.uf;
    pedido.endereco = form.endereco;
    pedido.numero = form.numero;
    pedido.referencia = form.referencia;
    pedido.complemento = form.complemento;

    console.log(pedido);

  };

  // DADOS DO CLIENTE

  // ENVIA DADOS DO CLIENTE
  $scope.enviaDados = function(form){

    pedido.nome = form.nome;
    pedido.telefone = form.telefone;
    pedido.celular = form.celular;

    console.log(pedido);
  };

  // DADOS DO PEDIDO

  // ENVIA DADOS DO PEDIDO


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
