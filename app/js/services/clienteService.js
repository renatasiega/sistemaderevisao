angular.module("sistemDeRevisao").factory("clienteService", function () {

  cliente = function(_nome, _telefone, _email){
    var c = {
      nome: _nome,
      telefone: _telefone,
      email: _email
    }
    return c;
  }

  var clientes = [
          cliente("Renata",   "9999-8888", "teste@mail.com"),
          cliente("Marina",   "9999-7777", "teste1@mail.com"),
          cliente("Carina",   "9999-6666", "teste2@mail.com"),
          cliente("Pristina", "9999-5555", "teste3@mail.com")
      ];

  _getAll = function (){
      return clientes;
  }

  _save = function (cliente){
    clientes.push(cliente);
  }

  return {
    getAll: _getAll,
    save: _save
  }

});
