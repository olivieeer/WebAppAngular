'use strict';

describe('Controller: AngularjsCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var AngularjsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularjsCtrl = $controller('AngularjsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngularjsCtrl.awesomeThings.length).toBe(3);
  });
});
