module.exports = function(app){

  var controller = app.controllers.produtos;

  app.route('/api/produtos/pizzas')
    .get(controller.getPizzas);

  app.route('/api/produtos/pizzasDoces')
    .get(controller.getPizzasDoces);

  app.route('/api/produtos/esfihas')
    .get(controller.getEsfihas);

  app.route('/api/produtos/sucos')
    .get(controller.getSucos);

    app.route('/api/produtos/bebidas')
    .get(controller.getBebidas);

  app.route('/api/produtos/bairros')
    .get(controller.getBairros);

  app.route('/api/produtos/bordas')
    .get(controller.getBordas);

  app.route('/api/produtos/pagamentos')
    .get(controller.getPagamentos);

};
