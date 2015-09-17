var assert = require('assert');
var proxyquire = require('proxyquire');

describe('module', function () {
  var module;

  beforeEach(function () {
    module = proxyquire('../module', {
      './bar': {
         wunder: function () { return 'wirklich wunderbar'; }
       , kinder: function () { return 'schokolade'; }
      }
    });
  });

  it('mocks out deps', function () {
    assert.equal(module(), 'schokolade ist wirklich wunderbar')
  });
});
