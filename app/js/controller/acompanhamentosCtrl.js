angular.module("sistemDeRevisao").controller("acompanhamentosCtrl", function ($scope, $location, acompanhamentoService){
  console.log(acompanhamentoService.getAll());
  $scope.acompanhamentos = acompanhamentoService.getAll();

});
