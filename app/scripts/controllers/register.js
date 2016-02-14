'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the oliwebappApp
 */

	var register = angular.module('register', ['ngStorage']);
	 register.controller('RegisterCtrl',  function($scope, $localStorage, $sessionStorage) {
              var self = this;
              self.user={id:null,username:'',pwd:'',email:''};
              self.id = 4;
               
							$scope.$storage = $localStorage.$default({
								users:[
									{id:1, username: 'Sam', pwd: '1234', email: 'sam@abc.com'},
									{id:2, username: 'Tomy', pwd: '1234', email: 'tomy@abc.com'},
                  {id:3, username: 'kelly', pwd: '1234', email: 'kelly@abc.com'}
								]
							});

/*               self.users = [// In future posts, we will get it from server using service
                      {id:1, username: 'Sam', pwd: '1234', email: 'sam@abc.com'},
                      {id:2, user	name: 'Tomy', pwd: '1234', email: 'tomy@abc.com'},
                      {id:3, username: 'kelly', pwd: '1234', email: 'kelly@abc.com'}
              ]; */
               
              self.submit = function() {
                  if(self.user.id === null){
                      self.user.id = self.id++;
                      console.log('Saving New User', self.user);    
                      $scope.$storage.users.push(self.user);//Or send to server, we will do it in when handling services
                  }else{
                      for(var i = 0; i < $scope.$storage.users.length; i++){
                          if($scope.$storage.users[i].id === self.user.id) {
                            $scope.$storage.users[i] = self.user;
                            break;
                          }
                      }
                     console.log('User updated with id ', self.user.id);
                  }
                  self.reset();
              };
               
              self.edit = function(id){
                  console.log('id to be edited', id);
                  for(var i = 0; i < $scope.$storage.users.length; i++){
                      if($scope.$storage.users[i].id === id) {
                         self.user = angular.copy($scope.$storage.users[i]);
                         break;
                      }
                  }
              }
               
              self.remove = function(id){
                  console.log('id to be deleted', id);
                  for(var i = 0; i < self.users.length; i++){
                      if($scope.$storage.users[i].id === id) {
                         $scope.$storage.users.splice(i,1);
                         if(self.user.id === id){//It is shown in form, reset it.
                            self.reset();
                         }
                         break;
                      }
                  }
              }
               
              self.reset = function(){
                  self.user={id:null,username:'',pwd:'',email:''};
                  $scope.myForm.$setPristine(); //reset Form
              }
 
      });