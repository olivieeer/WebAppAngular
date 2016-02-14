'use strict';

describe('Service: authServices', function () {

  // load the service's module
  beforeEach(module('oliwebappApp'));

  // instantiate service
  var authServices;
  beforeEach(inject(function (_authServices_) {
    authServices = _authServices_;
  }));

  it('should do something', function () {
    expect(!!authServices).toBe(true);
  });

});
