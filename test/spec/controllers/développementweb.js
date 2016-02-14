'use strict';

describe('Controller: DVeloppementwebCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var DVeloppementwebCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DVeloppementwebCtrl = $controller('DVeloppementwebCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DVeloppementwebCtrl.awesomeThings.length).toBe(3);
  });
});
