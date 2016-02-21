angular.module("sistemDeRevisao").controller("cadastroClienteCtrl", function ($scope, $location, clienteService){

  $scope.clientes = clienteService.getAll();

  $scope.cadastrarCliente = function (cliente) {
    $scope.clientes.push(cliente);
    $location.path("/");
  };

  $scope.cancelar = function (){
    $location.path("/");
  }

});
