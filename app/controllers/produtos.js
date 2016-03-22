var pizzas = [
  {
    _id: 1,
    nome: 'calabresa',
    descricao: 'calabresa e cebola',
    valorGrande: '20,00',
    valorBroto: '10,00'
  },
  {
    _id: 2,
    nome: 'mussarela',
    descricao: 'mussarela e cebola',
    valorGrande: '20,00',
    valorBroto: '10,00'
  },
  {
    _id: 3,
    nome: 'frango com catupiry',
    descricao: 'frango, catupiry e mussarela',
    valorGrande: '20,00',
    valorBroto: '10,00'
  }
];

module.exports = function(app){

  var controller = {};

  // PIZZAS
  controller.getPizzas = function(req, res){

    res.json(pizzas);

  };

  return controller;

};
