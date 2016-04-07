angular.module('napoles').controller('SiteController',['$scope','$http','$timeout','$window', function($scope, $http, $timeout, $window){

  $scope.mensagem = '';
  $scope.trueSubPedidos = true;

  const pedido = {};

  // DADOS DE ENDEREÇO
  $scope.bairros = [];
  $scope.bairro = 'Escolha o bairro';

  // BUSCANDO BAIRROS DO SISTEMA
  // https://napoles-pizzaria.herokuapp.com/api/produtos/bairros?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
  $http.get('/api/produtos/bairros').then(function(bairros){
    $scope.bairros = bairros.data;
  }, function(erro){
    console.log(erro);
    console.log('Não foi possível buscar os bairros.')
  });

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

  // ENVIA VALOR DA TAXA
  $scope.selectBairro = function(taxa){
    $scope.taxaEntrega = parseFloat(taxa.replace(/,/, '.'));
    $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
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

  // https://napoles-pizzaria.herokuapp.com/api/produtos/pizzas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
  $http.get('/api/produtos/pizzas').then(function(pizzas){
    $scope.pizzas = pizzas.data;
  }, function(err){
    console.log(err)
    console.log('Não foi possível listar as pizzas');
  });

  // LISTANDO API DE ESFIHAS DO SISTEMA
  $scope.esfihas = [];

  $http.get('/api/produtos/esfihas').then(function(esfihas){
    $scope.esfihas = esfihas.data;
  }, function(err){
    console.log(err)
    console.log('Não foi possível listar as esfihas');
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
  $scope.enviaEsfiha = function(esfiha){
    tipo = 'Esfiha';
    valor = esfiha.valor;
    nome = esfiha.nome;
  };


  // SUBPEDIDOS
  $scope.subpedidos = [];

  // VALORES TOTAIS
  $scope.qtd = 0;
  $scope.subTotal = 0;
  $scope.taxaEntrega = 0;
  $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');



  // ADICIONANDO BORDAS
  $scope.bordas = [];
  $scope.borda = 'Escolha a borda';

  // https://napoles-pizzaria.herokuapp.com/api/produtos/bordas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
  $http.get('/api/produtos/bordas').then(function(bordas){
    $scope.bordas = bordas.data;
  }, function(erro){
    console.log(erro);
    console.log('Não foi possível buscar os bordas.')
  });

  // ENVIA VALOR DA BORDA
  $scope.selectBorda = function(taxa){
    $scope.valorBorda = taxa;
  };

  // ADICIONANDO PEDIDO
  $scope.adicionaPedido = function(form, produto){
    if(produto == 'pizza'){
      $scope.subpedidos.push({
        qtd: form.qtd,
        nome: tipo+' '+nome,
        observacoes: form.observacoes,
        borda: form.borda,
        valorBorda: form.valorBorda,
        valorNormal: valor,
        valor: (parseFloat(valor.replace(/,/, '.')) * form.qtd ) + parseFloat(form.valorBorda.replace(/,/, '.'))
      });

      $('.modal').modal('hide');

      $scope.valorBorda = form.valorBorda.replace(/,/, '.');
      $scope.qtd = form.qtd;

      // SOMA VALORES FINAIS
      $scope.subTotal += (parseFloat(valor.replace(/,/, '.')) * $scope.qtd) + parseFloat($scope.valorBorda);
      $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
    }else if(produto == 'esfiha'){
      $scope.subpedidos.push({
        qtd: form.qtd,
        nome: tipo+' '+nome,
        observacoes: form.observacoes,
        valorNormal: valor,
        valor: (parseFloat(valor.replace(/,/, '.')) * form.qtd )
      });
      $('.modal').modal('hide');

      $scope.qtd = form.qtd;
      // SOMA VALORES FINAIS
      $scope.subTotal += (parseFloat(valor.replace(/,/, '.')) * $scope.qtd);
      $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
    }

    // HABILITANDO BOTAO ENVIAR PEDIDO
    $scope.trueSubPedidos = false;
  };

  $scope.qtd = 1;
  // ADICIONA QUANTIDADE DE PEDIDOS
  $scope.addQtdSubPedido = function(subpedido){
    if(subpedido.nome.indexOf('Pizza') == 0 || subpedido.nome.indexOf('pizza') == 0){
      subpedido.qtd = subpedido.qtd + 1;
      subpedido.valor = (parseFloat(subpedido.valorNormal) + parseFloat($scope.valorBorda) ) * subpedido.qtd;

      // SOMA VALORES FINAIS
      $scope.subTotal += (parseFloat(subpedido.valorNormal) + parseFloat($scope.valorBorda) )* $scope.qtd;
      $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
    }else if(subpedido.nome.indexOf('Esfiha') == 0 || subpedido.nome.indexOf('esfiha') == 0){
      subpedido.qtd = subpedido.qtd + 1;
      subpedido.valor = parseFloat(subpedido.valorNormal.replace(/,/, '.')) * subpedido.qtd;

      // SOMA VALORES FINAIS
      $scope.subTotal += parseFloat(subpedido.valorNormal.replace(/,/, '.')) * $scope.qtd;
      $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
    }
  };

  // REMOVE SUBPEDIDO
  $scope.removeSubPedido = function(subpedido){
    var index = $scope.subpedidos.indexOf(subpedido);
    $scope.subpedidos.splice(index, 1);

    // SOMA VALORES FINAIS
    $scope.subTotal -= subpedido.valor;
    $scope.valorTotal = parseFloat($scope.subTotal + $scope.taxaEntrega).toFixed(2).replace('.',',');
  };


  // ENVIANDO SUBPEDIDO
  $scope.enviarSubPedido = function(){
    pedido.pedido = $scope.subpedidos;
    pedido.valorTotal = parseFloat($scope.valorTotal).toFixed(2).replace('.',',');
  };


  // ENVIANDO PEDIDO FINAL
  $scope.enviarPedido = function(form){
    pedido.formaPg = form.formaPagamento;

    // https://napoles-pizzaria.herokuapp.com/api/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg
    $http.post('/api/pedidos', pedido).success(function(data, status){

      $('.modal').modal('hide');

      $timeout(function(){
       $scope.mensagem = 'Enviado para cozinha!';
        $timeout(function(){
          $scope.mensagem = '';
          $window.location.reload();
        }, 2000);
      }, 1000);
    });
  };

}]);
