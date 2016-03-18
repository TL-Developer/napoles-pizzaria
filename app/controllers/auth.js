var jwt = require('jsonwebtoken');

module.exports = function(app){

  var controller = {}
    , User = app.models.user;

  controller.autentica = function(req, res){

    User.findOne({
      login: req.body.login,
      senha: req.body.senha
    }).then(function(usuario){
      if(!usuario){
        console.log('Login e senha inválidos');
        res.sendStatus(401);
      }else{
        var token = jwt.sign(usuario.login, app.get('secret'));

        console.log('token criado e jogado header de resposta');

        res.set('x-access-token', token);
        res.end();
      }
    }, function(err){
      console.log(err);
      res.sendStatus(401);
    });

  };

  controller.verificaToken = function(req, res, next){

    var token = req.headers['x-access-token'];

    if(token){
      console.log('verificando token...');

      jwt.verify(token, app.get('secret'), function(err, decoded){
        if(err){
          console.log('Token rejeitado');
          res.sendStatus(401);
        }

        req.usuario = decoded;
        next();
      });
    }else{
      console.log('Token não foi enviado');
      res.sendStatus(401);
    }
  };

  return controller;
};
