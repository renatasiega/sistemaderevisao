angular.module("sistemDeRevisao").config(function($routeProvider){

  $routeProvider.when("/", {
    templateUrl: "view/main.html",
  });

  $routeProvider.when("/clientes", {
    templateUrl: "view/clientes.html",
    controller: "clientesCtrl"
  });

   $routeProvider.when("/cadastro-cliente", {
     templateUrl: "view/cadastro-cliente.html",
     controller: "cadastroClienteCtrl"
   });
});
