module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/api/pedidos')
    .get(controller.getPedidos)
    .post(controller.createPedidos);

  app.route('/api/pedidos/:id')
    .delete(controller.deletePedido);
};
