angular.module("sistemDeRevisao").controller("clientesCtrl", function ($scope, $location, clienteService){

  $scope.clientes = clienteService.getAll();

  $scope.voltar = function (){
    $location.path("/");
  }

});
