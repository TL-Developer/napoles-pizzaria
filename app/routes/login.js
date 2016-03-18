module.exports = function(app){

  var controller = app.controllers.login;

  app.route('/api/login')
    .post(controller.login);

};
