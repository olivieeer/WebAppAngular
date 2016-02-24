'use strict';

/**
 * @ngdoc directive
 * @name oliwebappApp.directive:toolTip
 * @description
 * # toolTip
 */
angular.module('tooltip')
  .directive('toolTip',  function () {
  return {
    restrict: 'A',
    link: function(scope, element ){
      $(element).hover(function(){
        // on mouseenter
        $(element).tooltip('show');
      }, function(){
        // on mouseleave
        $(element).tooltip('hide');
      });
    }
  };
});
