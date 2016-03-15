module.exports = function(app){

  var controller = app.controllers.entregas;

  app.route('/api/entregas')
    .get(controller.getEntregas)
    .post(controller.createEntregas);

  app.route('/api/entregas/:id')
    .delete(controller.deleteEntrega);

};
