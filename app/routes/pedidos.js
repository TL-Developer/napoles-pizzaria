module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/pedidos')
    .get(controller.getPedidos)
    .post(controller.createPedidos);

  app.route('/pedidos/:id')
    .delete(controller.deletePedido);
};
