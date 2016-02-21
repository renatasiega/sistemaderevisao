angular.module("sistemDeRevisao").controller("cadastroClienteCtrl", function ($scope, $location){

  $scope.clientes = [];
  $scope.cadastrarCliente = function (cliente) {
    $scope.clientes.push(cliente);
    console.log($scope.clientes);
    $location.path("/");
  };

  $scope.cancelar = function (){
    $location.path("/");
  }

});
