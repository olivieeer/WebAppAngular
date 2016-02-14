'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:TodolistCtrl
 * @description
 * # TodolistCtrl
 * Controller of the oliwebap
*/
	
	/**
 * Déclaration du module todoList
 */
var todoList = angular.module('todoList',[ 'ngStorage']);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
/* todoList.controller('TodoCtrl', ['$scope',  */
   	todoList.controller('TodoCtrl', function($scope, $localStorage, $sessionStorage){
		
			$scope.$storage = $localStorage.$default({
         /*  x: 42,
          name: "olivier",
					company: "",
					completed: false, */
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
		
        // Ajouter un todo
        $scope.addTodo = function () {
            // .trim() permet de supprimer les espaces inutiles
            // en début et fin d'une chaîne de caractères
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                // éviter les todos vides
                return;
            }
            $scope.$storage.todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                completed: false
            });

            // Réinitialisation de la variable newTodo
            $scope.newTodo = '';
				};	
		
				/* var res = $http.post('/savecompany_json', dataObj); */
       

        // Enlever un todo
        $scope.removeTodo = function (todo) {
            $scope.$storage.todos.splice($scope.$storage.todos.indexOf(todo), 1);
        };

        // Cocher / Décocher tous les todos
        $scope.markAll = function (completed) {
            $scope.$storage.todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };

        // Enlever tous les todos cochés
        $scope.clearCompletedTodos = function () {
            $scope.$storage.todos = $scope.$storage.todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    });
