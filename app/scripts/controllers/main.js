'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oliwebappApp
 */

 
  /**
 * Déclaration du module todoList
 */
var main = angular.module('main',[]);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
main.controller('MainCtrl', ['$scope',
    function ($scope) {

        $scope.showModal = false;
        $scope.toggleModal = function(){
					$scope.showModal = !$scope.showModal;
				};
    }
]);