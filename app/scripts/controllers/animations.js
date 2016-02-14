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

			$scope.nbJoursTravailles = 0;

			$scope.libelleClient = 'Auchan';
     
    }
]);

animations.controller('AnimationsCtrl1',

  function ($scope) {

    $scope.debutMois = new Date();
    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];
    $rootScope.libelle = "essai OLIVE";
    $scope.nbJoursTravailles = 0;

    $scope.libelleClient = 'Auchan';

    var x = Number(prompt("Entrez une valeur :"));
    var but = x * 3 - 1;
    but += 5;
    console.log(but);

   

  });