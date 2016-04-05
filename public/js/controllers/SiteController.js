angular.module('napoles').controller('SiteController',['$scope','$http','$timeout', function($scope, $http, $timeout){

  $scope.mensagem = '';

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

  // LISTANDO API DE PIZZAS DO SISTEMA
  $scope.pizzas = [];

  $http.get('https://napoles-pizzaria.herokuapp.com/api/produtos/pizzas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg').then(function(pizzas){
    $scope.pizzas = pizzas.data;
  }, function(err){
    console.log(err)
  });


  var tipo
    , valor
    , nome;

  // ENVIA TAMANHO E TIPO
  $scope.enviaBroto = function(broto){
    tipo = 'Broto';
    valor = broto.valorBroto;
    nome = broto.nome;
  };
  $scope.enviaPizza = function(pizza){
    tipo = 'Pizza';
    valor = pizza.valorGrande;
    nome = pizza.nome;
  };


  // SUBPEDIDOS
  $scope.subpedidos = [];

  // ADICIONA PEDIDO
  $scope.adicionaPedido = function(form){
    $scope.subpedidos.push({
      qtd: form.qtd,
      nome: tipo+' '+nome,
      observacoes: form.observacoes,
      extras: form.extras,
      valor: parseFloat(valor.replace(/,/, '.')) * form.qtd
    });
    $('.modal').modal('hide');
  };

  $scope.qtd = 1;
  // ADICIONA QUANTIDADE
  $scope.addQtdSubPedido = function(subpedido){
    subpedido.qtd = subpedido.qtd + 1;
    subpedido.valor = parseFloat(valor.replace(/,/, '.')) * subpedido.qtd;
  };

  // REMOVE SUBPEDIDO
  $scope.removeSubPedido = function(subpedido){
    var index = $scope.subpedidos.indexOf(subpedido);
    $scope.subpedidos.splice(index, 1);
  };

  // $scope.enviarPedido = function(form){

  //   var data = new Date()
  //     , mes = data.getDay()
  //     , dia = data.getMonth()
  //     , ano = data.getFullYear()
  //     , hora = data.getHours()
  //     , minutos = data.getMinutes();

  //   var pedido = {
  //     nome: form.nome,
  //     telefone: form.telefone,
  //     celular: form.celular,
  //     endereco: form.endereco,
  //     referencia: form.referencia,
  //     pedido: form.pedido,
  //     valor: form.valor,
  //     bairro: form.bairro,
  //     cep: form.cep,
  //     formaPg: form.formaPg,
  //     observacoes: form.observacoes
  //   };

  //   // https://napoles-pizzaria.herokuapp.com/api/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
  //   $http.post('/api/pedidos', pedido).success(function(data, status){
  //     $scope.mensagem = 'Enviado para cozinha!';
  //     $timeout(function(){
  //       $scope.mensagem = '';
  //     }, 2000);
  //   });

  // };
}]);
