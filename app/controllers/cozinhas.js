module.exports = function(app){

  var controller = {}
    , Cozinhas = app.models.cozinhas;

  controller.getCozinhas = function(req, res){
    Cozinhas.find().exec().then(function(cozinhas){
      res.status(200).json(cozinhas);
    },
    function(erro){
      console.error(erro);
      res.status(500).json(erro);
    });
  };

  controller.createCozinha = function(req, res){
    var cozinha = req.body;

    Cozinhas.create(cozinha).then(function(cozinha){
      res.status(201).json(cozinha);
      app.get('io').emit('novoPedidoCozinha', cozinha);
    },
    function(erro){
      console.log(erro);
      console.log('Não foi possível enviar o pedido.');
      res.status(500).json(erro);
    });
  };

  controller.deleteCozinha = function(req, res){
    var _id = req.params.id;

    Cozinhas.remove({"_id": _id}).exec().then(function(){
      res.end();
    },
    function(erro){
      return console.error(erro);
    });
  };

  return controller;

};
