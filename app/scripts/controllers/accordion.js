'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:AccordionCtrl
 * @description
 * # AccordionCtrl
 * Controller of the oliwebappApp
 */

                    
var accordion = angular.module('accordion', ['ui.bootstrap']);
        accordion.controller('AccordionCtrl', function ($scope, $http) {
 // initiate an array to hold all active tabs
            
        $http.get('../../json/accordionTabs.json').success(function(data) {
            $scope.activeTabs = data;
            var i = 0;
        });

   /*   $scope.activeTabs = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1",
      open: false
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2",
      open: false
    }
  ];*/
  
  $scope.addNew = function() {
    $scope.activeTabs.push({
      title: "New One Created",
      content: "Dynamically added new one",
      open: false
    });
  }
  
    /*$scope.activeTabs = [];*/

    // check if the tab is active
    $scope.isOpenTab = function (index) {
        // check if this tab is already in the activeTabs array
        if (index > -1) {
            // if so, return true
            return $scope.activeTabs[index].open;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (index) {
        // check if tab is already open
        if ($scope.activeTabs[index].open) {
           $scope.activeTabs[index].open = false;
        } else {
            // if it's not, add it!
            $scope.activeTabs[index].open = true;
        }
    }
  
    $.datepicker.regional['fr'] = {
			closeText: 'Fermer',
			prevText: 'Précédent',
			nextText: 'Suivant',
			currentText: 'Aujourd\'hui',
			monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
			monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
			dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
			dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
			dayNamesMin: ['D','L','M','M','J','V','S'],
			weekHeader: 'Sem.',
			dateFormat: 'dd/mm/yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
			};
			
			$.datepicker.setDefaults($.datepicker.regional['fr']);


				$( "#datepicker").datepicker();
		
});


                