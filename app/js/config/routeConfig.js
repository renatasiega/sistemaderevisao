angular.module("sistemDeRevisao").config(function($routeProvider){
   $routeProvider.when("/cadastro-cliente", {
     templateUrl: "view/cadastro-cliente.html",
     controller: "cadastroClienteCtrl"
   });
});
