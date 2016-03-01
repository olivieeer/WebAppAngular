'use strict';

/**
 * @ngdoc service
 * @name oliwebappApp.jsonService
 * @description
 * # jsonService
 * Service in the oliwebappApp.
 */
var myJsonService = angular.module('myJsonService')
    myJsonService.service('jsonService', function ($http) {
        return {
            getJSON: function() {
                return $http.get('test.json');
            }
        };
  });

