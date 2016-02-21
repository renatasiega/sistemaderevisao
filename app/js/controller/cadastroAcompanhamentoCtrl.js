angular.module("sistemDeRevisao").controller("cadastroAcompanhamentoCtrl", function ($scope, $location, clienteService){

  $scope.map = new Map();
  $scope.clientes = toString(clienteService.getAll());
  $scope.periodos = [6, 12, 24, 36, 48, 60, 72];
  $scope.acompanhamentos = [];

  $scope.acompanhamento = {
    periodos: [6, 12, 24, 36, 48, 60, 72],
    dataCompra: new Date()
  };

  $scope.cadastrarAcompanhamento = function (acompanhamento) {
    $scope.acompanhamentos.push(acompanhamento);
    console.log($scope.acompanhamentos);
    $location.path("/");
  };

  $scope.handleOnselect = function(selected){
    console.log($scope.map.get(selected));
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
