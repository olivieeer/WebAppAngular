'use strict';

describe('Controller: FilerouteCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var FilerouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilerouteCtrl = $controller('FilerouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilerouteCtrl.awesomeThings.length).toBe(3);
  });
});
