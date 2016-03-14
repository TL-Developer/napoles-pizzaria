module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/api/pedidos')
    .get(controller.getPedidos);

};
