module.exports = function(app){

  var controller = {}
    , Entregas = app.models.entregas;

  controller.getEntregas = function(req, res){
    Entregas.find().exec().then(function(entregas){
      res.status(200).json(entregas);
    },
    function(erro){
      console.error(erro);
      res.status(500).json(erro);
    });;
  };

  controller.createEntregas = function(req, res){
    var entregas = req.body;

    Entregas.create(entregas).then(function(entregas){
      res.status(201).json(entregas);
      app.get('io').emit('novoPedidoEntrega', entregas);
    },
    function(erro){
      console.log(erro);
      console.log('Não foi possível enviar o pedido.');
      res.status(500).json(erro);
    });
  };

  // controller.deleteEntregas = function(req, res){
  //   var _id = req.params.id;

  //   Cozinhas.remove({"_id": _id}).exec().then(function(){
  //     res.end();
  //   },
  //   function(erro){
  //     return console.error(erro);
  //   });
  // };

  return controller;

};
