var mongoose = require('mongoose');

module.exports = function(){

  var schema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    },
    celular: {
      type: String,
      required: true
    },
    endereco: {
      type: String,
      required: true
    },
    referencia: {
      type: String,
      required: true
    },
    pedido: {
      type: String,
      required: true
    },
    valor: {
      type: String,
      required: true
    },
    hora: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: new Date().toUTCString()
    }
  });


  return mongoose.model('Cozinhas', schema);

};
