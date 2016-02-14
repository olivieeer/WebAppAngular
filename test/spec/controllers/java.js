'use strict';

describe('Controller: JavaCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var JavaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JavaCtrl = $controller('JavaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JavaCtrl.awesomeThings.length).toBe(3);
  });
});
