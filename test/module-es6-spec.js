import assert from 'assert';
import proxyquire from 'proxyquire';

describe('module', function () {
  let module;

  beforeEach(function () {
    module = proxyquire('../module.es6', {
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
