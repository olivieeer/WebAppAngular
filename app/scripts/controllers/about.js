'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oliwebappApp
 */

	/**
 * Déclaration du module todoList
 */
var about = angular.module('about', [ 'ngStorage']);
			about.controller('AboutCtrl', function($scope, $localStorage, $sessionStorage){
		
			$scope.$storage = $localStorage.$default({
					x: 42,
					name: "olivier",
					company: "",
					completed: false,
					
					todos:[
						{
								title: "une tache1",
								completed: false
						},
						{
								title: "une tache222222222",
								completed: true
						}
					]
					
				});
	
});

