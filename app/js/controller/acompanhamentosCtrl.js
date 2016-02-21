angular.module("sistemDeRevisao").controller("acompanhamentosCtrl", function ($scope, $location, acompanhamentoService){
  console.log(acompanhamentoService.getAll());
  $scope.acompanhamentos = acompanhamentoService.getAll();

  $scope.agendar = function (acompanhamento) {
    acompanhamentoService.edit(acompanhamento);
  }

  $scope.isLate = function (acompanhamento) {
    return (!acompanhamento.agendado && (new Date() >= acompanhamento.dataRevisao));
  }

});
