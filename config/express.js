var express = require('express')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , methodOverride = require('method-override')
  , helmet = require('helmet')
  , load = require('express-load')
  , favicon = require('static-favicon')
  , passport = require('passport')
  , BasicStrategy = require('passport-http').BasicStrategy;

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3000);

  app.set('secret','tksecretpizza');

  app.use(passport.initialize());

  passport.use(new BasicStrategy(function(username, password, done){
    if(username.valueOf() == 'paulo' && password.valueOf() == 'napoles'){
      return done(null, true);
    }else{
      return done(null, false);
    }
  }));

  app.use(express.static('./public'));

  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
  });

  app.use(favicon());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(methodOverride());

  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
  app.disable('x-powered-by');
  app.use(helmet.ieNoOpen());

 load('models', {cwd: 'app'})
  .then('controllers')
  .then('routes/auth.js')
  .then('routes')
  .into(app);

  return app;
};
