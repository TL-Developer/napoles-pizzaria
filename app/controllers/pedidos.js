var pedidos = [
  {
    nome: 'Tiago lima',
    telefone: '2585-5522',
    celular: '99525-5522',
    endereco: 'Av. Oliveira freire, 255',
    referencia: 'Ao lado do mercado extra.',
    pedido: '1 pizza de calabresa, 1 pizza de frango com catupiry, 1 coca',
    valor: '250',
    hora: '08:40',
    data: '15/03/2016'
  }
];

module.exports = function(app){

  var controller = {};

  controller.getPedidos = function(req, res){
    res.json(pedidos);
  };

  return controller;

};
