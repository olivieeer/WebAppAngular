'use strict';

/**
 * @ngdoc function
 * @name oliwebappApp.controller:FilecontrolCtrl
 * @description
 * # FilecontrolCtrl
 * Controller of the oliwebappApp
 */

 var filecontrol = angular.module('filecontrol', ['fileUpload']);
 
filecontrol.controller('FilecontrolCtrl', ['$scope', 'fileUpload',
		function($scope, fileUpload){
				$scope.uploadFile = function(){
										 var file = $scope.myFile;
										 
										 console.log('file is ' );
										 console.dir(file);
										 
										 var uploadUrl = "/fileUpload";
										 fileUpload.uploadFileToUrl(file, uploadUrl);
										 
				};
	
}]);