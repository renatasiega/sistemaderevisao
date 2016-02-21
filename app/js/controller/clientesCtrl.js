angular.module("sistemDeRevisao").controller("clientesCtrl", function ($scope, $location, clienteService){
  $scope.clientes = clienteService.getAll();

  $scope.ordernarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  $scope.cadastrarAcompanhamento = function(){
    $location.path("/cadastro-acompanhamento");
  };

});
