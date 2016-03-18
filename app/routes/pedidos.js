var passport = require('passport');

module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/api/pedidos')
    .get(passport.authenticate('basic', { session: false }), controller.getPedidos)
    .post(controller.createPedidos);

  app.route('/api/pedidos/:id')
    .delete(controller.deletePedido);
};
