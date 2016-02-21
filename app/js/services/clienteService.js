angular.module("sistemDeRevisao").factory("clienteService", function () {
  var clientes = [];
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
