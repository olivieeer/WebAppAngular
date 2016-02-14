'use strict';

describe('Controller: FilecontrolCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var FilecontrolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilecontrolCtrl = $controller('FilecontrolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilecontrolCtrl.awesomeThings.length).toBe(3);
  });
});
