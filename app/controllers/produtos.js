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

var bairros = [
  {
    _id: 1,
    nome: 'Jd. Helena',
    valor: '2,00'
  },
  {
    _id: 2,
    nome: 'São miguel',
    valor: '2,00'
  },
  {
    _id: 3,
    nome: 'Vila mara',
    valor: '2,00'
  }
];

var bordas = [
  {
    _id: 1,
    nome: 'Borda catupiry',
    valor: '2,00'
  },
  {
    _id: 2,
    nome: 'Borda cheddar',
    valor: '3,00'
  },
  {
    _id: 3,
    nome: 'Borda doce',
    valor: '3,50'
  }
];

module.exports = function(app){

  var controller = {};

  // PIZZAS
  controller.getPizzas = function(req, res){
    res.json(pizzas);
  };

  // BAIRROS
  controller.getBairros = function(req, res){
    res.json(bairros);
  };

  // BORDAS
  controller.getBordas = function(req, res){
    res.json(bordas);
  };

  return controller;
};
