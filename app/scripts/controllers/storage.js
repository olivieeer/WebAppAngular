'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:StorageCtrl
 * @description
 * # StorageCtrl
 * Controller of the oliwebappApp
 */
var storage =	angular.module('storage', [ 'ngStorage']);
storage.controller('StorageCtrl', function(
    $scope,
    $localStorage,
    $sessionStorage
){
	 $scope.$storage = $localStorage.$default({
          x: 42
        });
	
	
	
});