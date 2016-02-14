'use strict';

describe('Controller: JqueryCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var JqueryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JqueryCtrl = $controller('JqueryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JqueryCtrl.awesomeThings.length).toBe(3);
  });
});
