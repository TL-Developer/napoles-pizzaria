var passport = require('passport');

module.exports = function(app){

  var controller = app.controllers.cozinhas;

  app.route('/api/cozinhas')
    .get(passport.authenticate('basic', { session: false }),controller.getCozinhas)
    .post(passport.authenticate('basic', { session: false }),controller.createCozinha);

  app.route('/api/cozinhas/:id')
    .delete(passport.authenticate('basic', { session: false }),controller.deleteCozinha);

};
