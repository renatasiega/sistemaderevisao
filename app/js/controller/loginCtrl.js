angular.module("sistemDeRevisao").controller("loginCtrl", function ($scope, $location, loginService){

	$scope.credentials = {};
	$scope.credentials.login = "admin";
	$scope.credentials.password = "admin";

  $scope.login = function (credentials){
		console.log(loginService.login(credentials));
		if (loginService.login(credentials) != null) {
			$location.path("/");
		}
  };

});