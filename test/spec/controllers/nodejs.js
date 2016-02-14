'use strict';

describe('Controller: NodejsCtrl', function () {

  // load the controller's module
  beforeEach(module('oliwebappApp'));

  var NodejsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodejsCtrl = $controller('NodejsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NodejsCtrl.awesomeThings.length).toBe(3);
  });
});
