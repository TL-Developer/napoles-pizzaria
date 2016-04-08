var mongoose = require('mongoose');

module.exports = function(){

  var schema = new mongoose.Schema({
    bairro: {
      nome: {type: String},
      valor: {type: String}
    },
    celular: {type: String},
    cep: {type: String},
    cidade: {type: String},
    complemento: {type: String},
    endereco: {type: String},
    formaPg: {
      nome: {type: String}
    },
    nome: {type: String},
    numero: {type: String},
    pedido: [
      {
        borda: {
          nome: {type: String},
          valor: {type: String}
        },
        nome: {type: String},
        observacoes: {type: String},
        qtd: {type: Number},
        valor: {type: Number}
      }
    ],
    referencia: {type: String},
    telefone: {type: String},
    uf: {type: String},
    valor: {type: String},
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

  return mongoose.model('Pedidos', schema);
};
