'use strict';

describe('Controller: BootstrapexempleCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var BootstrapexempleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BootstrapexempleCtrl = $controller('BootstrapexempleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BootstrapexempleCtrl.awesomeThings.length).toBe(3);
  });
});
