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
        alert("CEP não encontrado.");
      }
    });
  };

  // ENVIANDO ENDEREÇO
  $scope.enviaEndereco = function(form){
    pedido.bairro = form.bairro;
    pedido.cep = form.cep;
    pedido.cidade = form.cidade;
    pedido.uf = form.uf;
    pedido.endereco = form.endereco;
    pedido.numero = form.numero;
    pedido.referencia = form.referencia;
    pedido.complemento = form.complemento;
  };

  // DADOS DO CLIENTE

  // ENVIA DADOS DO CLIENTE
  $scope.enviaDados = function(form){
    pedido.nome = form.nome;
    pedido.telefone = form.telefone;
    pedido.celular = form.celular;
  };

  // DADOS DO PEDIDO

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

  // VALORES TOTAIS
  $scope.qtd = 0;
  $scope.subTotal = 0;
  $scope.taxaEntrega = 2.00;
  $scope.valorTotal = $scope.subTotal + $scope.taxaEntrega;


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

    $scope.qtd = form.qtd;

    // SOMA VALORES FINAIS
    $scope.subTotal += parseFloat(valor.replace(/,/, '.')) * $scope.qtd;
    $scope.valorTotal = $scope.subTotal + $scope.taxaEntrega;
  };

  $scope.qtd = 1;
  // ADICIONA QUANTIDADE DE PEDIDOS
  $scope.addQtdSubPedido = function(subpedido){
    subpedido.qtd = subpedido.qtd + 1;
    subpedido.valor = parseFloat(valor.replace(/,/, '.')) * subpedido.qtd;

    // SOMA VALORES FINAIS
    $scope.subTotal += parseFloat(valor.replace(/,/, '.')) * $scope.qtd;
    $scope.valorTotal = $scope.subTotal + $scope.taxaEntrega;
  };

  // REMOVE SUBPEDIDO
  $scope.removeSubPedido = function(subpedido){
    var index = $scope.subpedidos.indexOf(subpedido);
    $scope.subpedidos.splice(index, 1);

    // SOMA VALORES FINAIS
    $scope.subTotal -= subpedido.valor;
    $scope.valorTotal = $scope.subTotal + $scope.taxaEntrega;
  };


  // ENVIANDO SUBPEDIDO
  $scope.enviarSubPedido = function(){
    pedido.pedido = $scope.subpedidos;
    pedido.valorTotal = $scope.valorTotal;
  };


  // ENVIANDO PEDIDO FINAL
  $scope.enviarPedido = function(form){
    pedido.formaPg = form.formaPagamento;

    // https://napoles-pizzaria.herokuapp.com/api/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
    $http.post('/api/pedidos', pedido).success(function(data, status){
      $scope.mensagem = 'Enviado para cozinha!';
      $timeout(function(){
        $scope.mensagem = '';
      }, 2000);
    });
  };

}]);
