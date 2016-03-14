var http = require('http')
  , app = require('./config/express')();

require('./config/database.js')('mongodb://tiago:admin@ds011379.mlab.com:11379/napolespizarria');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Servidor escutando na porta ' + app.get('port'));
});
