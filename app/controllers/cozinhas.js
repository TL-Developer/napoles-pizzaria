var cozinhas = [
  {
    nome: 'Tiago lima',
    telefone: '2585-5522',
    celular: '99525-5522',
    endereco: 'Av. Oliveira freire, 255',
    referencia: 'Ao lado do mercado extra.',
    pedido: '1 pizza de calabresa, 1 pizza de frango com catupiry, 1 coca',
    valor: 250
  }
];

module.exports = function(app){

  var controller = {};

  controller.getCozinhas = function(req, res){
    res.json(cozinhas);
  };

  return controller;

};
