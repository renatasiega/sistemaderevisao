angular.module("sistemDeRevisao").controller("cadastroAcompanhamentoCtrl", function ($scope, $location, clienteService, acompanhamentoService){

  $scope.map = new Map();
  $scope.clientes = toString(clienteService.getAll());
  $scope.periodos = [6, 12, 24, 36, 48, 60, 72];
  $scope.acompanhamentos = [];

  $scope.acompanhamento = {
    periodos: [6, 12, 24, 36, 48, 60, 72],
    dataCompra: new Date()
  };

  $scope.cadastrarAcompanhamento = function (acompanhamento) {
    acompanhamentoService.save(acompanhamento);
    $location.path("/");
  };

  $scope.selecionarCliente = function(cliente){
    $scope.acompanhamento.cliente = $scope.map.get(cliente);
  }

  $scope.cancelar = function (){
    $location.path("/");
  }

  function toString(clientesJson){
    var c = [];
    for (var i = 0; i < clientesJson.length; i++) {
        c.push(clientesJson[i].nome);
        $scope.map.set(clientesJson[i].nome, clientesJson[i]);
    }
    return c;
  }


});
