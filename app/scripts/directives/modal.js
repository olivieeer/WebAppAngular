'use strict';

/**
 * @ngdoc directive
 * @name oliwebappApp.directive:modal
 * @description
 * # modal
 */

var mymodal = angular.module('mymodal', []);

  mymodal.directive('myModal', function () {
    return {
        template: '<div class="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content container" style="border:2px">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">Mon Super titre</h4>' +
              '</div>' +
              '<div class="modal-body">Ce ci est mon corps</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
        '</div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
