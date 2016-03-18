var passport = require('passport');

module.exports = function(app){

  var controller = app.controllers.pizzas;

  app.route('/api/pizzas')
    .get(passport.authenticate('basic', { session: false }),controller.getPizzas);

};
