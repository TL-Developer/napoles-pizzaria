module.exports = function(app){

  var controller = app.controllers.cozinhas;

  app.route('/api/cozinhas')
    .get(controller.getCozinhas)
    .post(controller.createCozinha)
    .delete(controller.deleteCozinha);

};
