var assert = require('assert');
var proxyquire = require('proxyquire');

describe('module', function () {
  let module;

  beforeEach(function () {
    module = proxyquire('../module.es6', {
      './bar.es6': {
         wunder: function () { return 'wirklich wunderbar'; }
       , kinder: function () { return 'schokolade'; }
      }
    });
  });

  it('mocks out deps', function () {
    assert.equal(module(), 'schokolade ist wirklich wunderbar')
  });
});
