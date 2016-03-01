'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:AnimationsCtrl
 * @description
 * # AnimationsCtrl
 * Controller of the oliwebappApp
 */
 /**
 * Déclaration du module todoList
 */
var animations = angular.module('animations',[]);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
animations.controller('AnimationsCtrl', ['$scope',
    function ($scope) {
            $scope.today = new Date();
            $scope.types = [
                {name:'Congés payés', 'value': 1},
                {name:'Congés exceptionnels' , 'value': 2},
                {name:'RTT', 'value': 3},
                {name:'Congés sans solde', 'value': 4}
            ];

            $scope.toggleEssai1 = false;

            $scope.libelleClient = 'Auchan';

    }
]);
