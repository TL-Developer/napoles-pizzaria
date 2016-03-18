var passport = require('passport');

module.exports = function(app){

  var controller = app.controllers.entregas;

  app.route('/api/entregas')
    .get(passport.authenticate('basic', { session: false }),controller.getEntregas)
    .post(passport.authenticate('basic', { session: false }),controller.createEntregas);

  app.route('/api/entregas/:id')
    .delete(passport.authenticate('basic', { session: false }),controller.deleteEntrega);

};
