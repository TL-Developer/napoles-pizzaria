module.exports = function(app){

  var controller = app.controllers.produtos;

  app.route('/api/produtos/pizzas')
    .get(controller.getPizzas);

  app.route('/api/produtos/esfihas')
    .get(controller.getEsfihas);

  app.route('/api/produtos/bairros')
    .get(controller.getBairros);

  app.route('/api/produtos/bordas')
    .get(controller.getBordas);

};
