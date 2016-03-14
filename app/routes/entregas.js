module.exports = function(app){

  var controller = app.controllers.entregas;

  app.route('/api/entregas')
    .get(controller.getEntregas);

};
