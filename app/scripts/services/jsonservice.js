'use strict';

/**
 * @ngdoc service
 * @name oliwebappApp.jsonservice
 * @description
 * # jsonservice
 * Service in the oliwebappApp.
 */
var myJsonService = angular.module('myJsonService');

  myJsonService.service('jsonservice', function($http){         
    return {
        getJSON: function() {
            return $http.get('test.json');
        }
    };
});

