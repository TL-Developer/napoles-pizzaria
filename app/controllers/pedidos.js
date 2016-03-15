// var pedidos = [
//   {
//     nome: 'Tiago lima',
//     telefone: '2585-5522',
//     celular: '99525-5522',
//     endereco: 'Av. Oliveira freire, 255',
//     referencia: 'Ao lado do mercado extra.',
//     pedido: '1 pizza de calabresa, 1 pizza de frango com catupiry, 1 coca',
//     valor: '250',
//     hora: '08:40',
//     data: '15/03/2016'
//   }
// ];

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

    Pedidos.create(pedido).then(function(pedido){
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
