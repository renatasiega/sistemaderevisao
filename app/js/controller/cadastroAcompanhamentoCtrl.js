angular.module("sistemDeRevisao").controller("cadastroAcompanhamentoCtrl", function ($scope, $location){

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


});
