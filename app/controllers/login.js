module.exports = function(app){

  var controller = {};

  controller.login = function(req, res){
    console.log(req.body);
  };

  return controller;
};
