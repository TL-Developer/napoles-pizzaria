var pizzas = [
  {
    _id: 1,
    nome: 'calabresa',
    descricao: 'calabresa e cebola',
    valor: '20,00'
  },
  {
    _id: 2,
    nome: 'mussarela',
    descricao: 'mussarela e cebola',
    valor: '20,00'
  }
];

module.exports = function(app){

  var controller = {};

  controller.getPizzas = function(req, res){

    res.json(pizzas);

  };

  return controller;

};
