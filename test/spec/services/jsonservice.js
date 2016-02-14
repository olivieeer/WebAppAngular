'use strict';

describe('Service: jsonservice', function () {

  // load the service's module
  beforeEach(module('oliwebappApp'));

  // instantiate service
  var jsonservice;
  beforeEach(inject(function (_jsonservice_) {
    jsonservice = _jsonservice_;
  }));

  it('should do something', function () {
    expect(!!jsonservice).toBe(true);
  });

});
