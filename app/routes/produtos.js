module.exports = function(app){

  var controller = app.controllers.produtos;

  app.route('/api/produtos/pizzas')
    .get(controller.getPizzas);

};
