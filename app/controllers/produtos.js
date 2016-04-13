var pizzas = require('./produtos/pizzas').pizzas;
var pizzasDoces = require('./produtos/pizzas').pizzasDoces;
var esfihas = require('./produtos/esfihas').esfihas;
var esfihasDoces = require('./produtos/esfihas').esfihasDoces;
var bairros = require('./produtos/outros').bairros;
var bordas = require('./produtos/outros').bordas;
var bebidas = require('./produtos/bebidas').bebidas;
var pagamentos = require('./produtos/outros').pagamentos;
var beirutes = require('./produtos/beirutes').beirutes;

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

  // ESFIHAS DOCES
  controller.getEsfihasDoces = function(req, res){
    res.json(esfihasDoces);
  };

  // BEIRUTES
  controller.getBeirutes = function(req, res){
    res.json(beirutes);
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
