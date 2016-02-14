'use strict';

/**
 * @ngdoc service
 * @name oliwebappApp.AuthAppServices
 * @description
 * # AuthAppServices
 * Factory in the oliwebappApp.
 */
angular.module("AuthAppServices",[]).
factory("DataService",function($http){
    return {
        getPublicData : function(){
            return $http.get("/api/data");
        },
        getPrivateData : function() {
            return $http.get("/api/secure/data");
        }
    };
});