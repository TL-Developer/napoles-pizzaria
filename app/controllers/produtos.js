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

var pizzasDoces = [
  {
    _id: 13,
    nome: 'Chocolate',
    descricao: 'chocolate',
    valorGrande: '20,00',
    valorBroto: '10,00'
  },
  {
    _id: 14,
    nome: 'Chocolate com morango',
    descricao: 'chocolate e morango',
    valorGrande: '20,00',
    valorBroto: '10,00'
  },
  {
    _id: 15,
    nome: 'Romeu e julieta',
    descricao: 'chocolate',
    valorGrande: '20,00',
    valorBroto: '10,00'
  }
];

var esfihas = [
  {
    _id: 4,
    nome: 'carne',
    descricao: 'carne',
    valor: '2,00'
  },
  {
    _id: 5,
    nome: 'calabresa',
    descricao: 'calabresa',
    valor: '3,00'
  },
  {
    _id: 6,
    nome: 'frango',
    descricao: 'frango com catupiry',
    valor: '4,00'
  }
];

var bairros = [
  {
    _id: 7,
    nome: 'Jd. Helena',
    valor: '2,00'
  },
  {
    _id: 8,
    nome: 'São miguel',
    valor: '2,00'
  },
  {
    _id: 9,
    nome: 'Vila mara',
    valor: '2,00'
  }
];

var bordas = [
  {
    _id: 10,
    nome: 'Borda catupiry',
    valor: '2,00'
  },
  {
    _id: 11,
    nome: 'Borda cheddar',
    valor: '3,00'
  },
  {
    _id: 12,
    nome: 'Borda doce',
    valor: '3,50'
  }
];

var sucos = [
  {
    _id: 16,
    nome: 'Dell vale',
    valor: '3,50'
  }
];

var bebidas = [
  {
    _id: 17,
    nome: 'Skol lata',
    valor: '4,50'
  },
  {
    _id: 18,
    nome: 'Skol 600ml',
    valor: '7,50'
  },
  {
    _id: 19,
    nome: 'Itaipava lata',
    valor: '3,50'
  }
];

var pagamentos = [
  {
    _id: 20,
    nome: 'Dinheiro'
  },
  {
    _id: 21,
    nome: 'Cartão de crédito'
  },
  {
    _id: 22,
    nome: 'Vale refeição'
  }
];

module.exports = function(app){

  var controller = {};

  // PIZZAS
  controller.getPizzas = function(req, res){
    res.json(pizzas);
  };

  // PIZZAS DOCES
  controller.getPizzasDoces = function(req, res){
    res.json(pizzasDoces);
  };

  // ESFIHAS
  controller.getEsfihas = function(req, res){
    res.json(esfihas);
  };

  // SUCOS
  controller.getSucos = function(req, res){
    res.json(sucos);
  };

  // BEBIDAS
  controller.getBebidas = function(req, res){
    res.json(bebidas);
  };

  // BAIRROS
  controller.getBairros = function(req, res){
    res.json(bairros);
  };

  // BORDAS
  controller.getBordas = function(req, res){
    res.json(bordas);
  };

  // FORMAS DE PAGAMENTO
  controller.getPagamentos = function(req, res){
    res.json(pagamentos);
  };

  return controller;
};
