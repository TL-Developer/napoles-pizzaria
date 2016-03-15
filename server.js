var http = require('http')
  , app = require('./config/express')()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

require('./config/database.js')('mongodb://tiago:admin@ds011379.mlab.com:11379/napolespizarria');

app.set('io', io);

server.listen(app.get('port'), function(){
  console.log('Servidor escutando na porta ' + app.get('port'));
});

io.sockets.on('connection', function(socket){
  console.log('Usuário Conectado no sistema');

  socket.on('disconnect', function(){
     console.log('Usuário Desconectado no chat online');
  });
});
