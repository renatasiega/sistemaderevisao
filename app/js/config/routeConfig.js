angular.module("sistemDeRevisao").config(function($routeProvider){
   $routeProvider.when("/cadastro-cliente", {
     templateUrl: "view/cadastro-cliente.html",
     controller: "cadastroClienteCtrl"
   });

   $routeProvider.when("/cadastro-acompanhamento", {
     templateUrl: "view/cadastro-acompanhamento.html",
     controller: "cadastroAcompanhamentoCtrl"
   });

   $routeProvider.otherwise({redirectTo: "/"});
});
