module.exports = function(app){

  var controller = app.controllers.cozinhas;

  app.route('/api/cozinhas')
    .get(controller.getCozinhas);

};
