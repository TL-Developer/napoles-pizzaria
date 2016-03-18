module.exports = function(app){

  var controller = app.controllers.auth;

  app.post('/api/autenticar', controller.autentica);
  app.use('/*', controller.verificaToken);

};
