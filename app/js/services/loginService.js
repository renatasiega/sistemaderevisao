angular.module('sistemDeRevisao').factory('loginService', function() {
	var loginService = {};
	var defaultUser = {
		login: 'admin',
		password: 'admin'
	}
	var loggeduser = null;


	loginService.login = function(credentials) {
		if(credentials.login === defaultUser.login &&  credentials.password === defaultUser.password){
			loggeduser = defaultUser;
		}
		return loggeduser;
	};

	loginService.logout = function() {
		loggeduser = null;
	};

	loginService.isAuthenticated = function() {
		return !!loggeduser;
	};

	return loginService;
});