'use strict';

describe('Controller: BootstrapCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var BootstrapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BootstrapCtrl = $controller('BootstrapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BootstrapCtrl.awesomeThings.length).toBe(3);
  });
});
