angular.module("sistemDeRevisao").controller("acompanhamentosCtrl", function ($scope, $location, acompanhamentoService){
  $scope.acompanhamentos = acompanhamentoService.getAll();

});
