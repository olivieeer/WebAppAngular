'use strict';

describe('Controller: DeveloppementwebCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var DeveloppementwebCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeveloppementwebCtrl = $controller('DeveloppementwebCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeveloppementwebCtrl.awesomeThings.length).toBe(3);
  });
});
