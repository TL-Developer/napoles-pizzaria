module.exports = function(app){

  var controller = app.controllers.pizzas;

  app.route('/api/pizzas')
    .get(controller.getPizzas);

};
