var moment = require('moment');

module.exports = function(app){

  var controller = {}
    , Pedidos = app.models.pedidos;

  controller.getPedidos = function(req, res){

    Pedidos.find().exec().then(function(pedidos){
      res.status(200).json(pedidos);
    },
    function(erro){
      console.error(erro);
      res.status(500).json(erro);
    });
  };

  controller.createPedidos = function(req, res){
    var pedido = req.body;

    Pedidos.create({
      nome: pedido.nome,
      telefone: pedido.telefone,
      celular: pedido.celular,
      endereco: pedido.endereco,
      referencia: pedido.referencia,
      pedido: pedido.pedido,
      valor: pedido.valor,
      bairro: pedido.bairro,
      cep: pedido.cep,
      formaPg: pedido.formaPg,
      observacoes: pedido.observacoes,
      hora: moment().hours() + ':' + moment().minutes(),
      data: moment().locale('pt-br').format('L')
    }).then(function(pedido){
      res.status(201).json(pedido);
      app.get('io').emit('novoPedido', pedido);
    },
    function(erro){
      console.log(erro);
      console.log('Não foi possível enviar o pedido.');
      res.status(500).json(erro);
    });
  };


  controller.deletePedido = function(req, res){
    var _id = req.params.id;

    Pedidos.remove({"_id": _id}).exec().then(function(){
      res.end();
    },
    function(erro){
      return console.error(erro);
    });
  };

  return controller;

};
