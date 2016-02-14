'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the oliwebappApp
 */
/* var login = angular.module('login', []);
  login.controller('AdminUserCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',
	function() {
		var self = this;
		var users = [
    { id: 1, username: "bob", password: "bob", email: "bob@example.com" },
    { id: 2, username: "joe", password: "joe", email: "joe@example.com" }
];

//Admin User Controller (login, logout)
        $scope.logIn = function logIn(username, password) {
            if (username !== undefined && password !== undefined) {
 
                UserService.logIn(username, password).success(function(data) {
                    AuthenticationService.isLogged = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/admin");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
 
        $scope.logout = function logout() {
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                delete $window.sessionStorage.token;
                $location.path("/");
            }
        }
				
				self.submit = function() {	
								for (var i = 0, len = users.length; i < len; i++) {
									var trouve = false, logged = false;
									var user = users[i];
									if ((user.username === self.username) && (user.password === self.pwd)) {
										trouve = true;
										logged = true;
										alert("logged");
										console.log('User logged with  ', self.user);
										break;
									} else if (user.username === self.username) {
										trouve = true;
										alert("mdp invalide");
										break;
									}
								}

              };
							
  });
	 */



	/* appControllers.controller('AdminUserCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',
    function AdminUserCtrl($scope, $location, $window, UserService, AuthenticationService) {
 
        //Admin User Controller (login, logout)
        $scope.logIn = function logIn(username, password) {
            if (username !== undefined && password !== undefined) {
 
                UserService.logIn(username, password).success(function(data) {
                    AuthenticationService.isLogged = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/admin");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
 
        $scope.logout = function logout() {
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                delete $window.sessionStorage.token;
                $location.path("/");
            }
        }
    }
]); */
	
var login = angular.module('login', ['ngStorage']);
  login.controller("LoginCtrl",  function($scope, $localStorage, $sessionStorage){
	$scope.userIsLoggedIn = false;
    $scope.login = function() {
		var trouve = false, logged = false;
		for(var i = 0; i < $localStorage.users.length; i++){
				if(($localStorage.users[i].username === $scope.username) && ($localStorage.users[i].pwd === $scope.pwd)) {
					trouve = true;
					logged = true;
					$scope.userIsLoggedIn = true;
					alert("loggé");
				} else if ($localStorage.users[i].username === $scope.username) {
					trouve = true;
					logged = false;
					$scope.userIsLoggedIn = false;
					alert("mdp invalide");
				 } 
       
    };

}});
/* .controller("HeaderCtrl",function($scope){

    $scope.userService = UserService ;

    $scope.user = UserService.currentUser;

    $scope.logout = function() {
        UserService.logout();
    };


})
.controller("MainCtrl",function($scope,DataService){

    $scope.data = "" ;

    $scope.loadPublicData = function(){
        DataService.getPublicData().then(function(response){
            $scope.data = response.data.content;
        });
    };
    $scope.loadSecureData = function(){
        DataService.getPrivateData().then(function(response){
            $scope.data = response.data.content;
        });
    };

});
 */



