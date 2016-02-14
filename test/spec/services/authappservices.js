'use strict';

describe('Service: AuthAppServices', function () {

  // load the service's module
  beforeEach(module('oliwebappApp'));

  // instantiate service
  var AuthAppServices;
  beforeEach(inject(function (_AuthAppServices_) {
    AuthAppServices = _AuthAppServices_;
  }));

  it('should do something', function () {
    expect(!!AuthAppServices).toBe(true);
  });

});
