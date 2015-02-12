var assert = require('assert');
var sinon = require('sinon');
var doubleAll = require('../new/doubleAll');

describe('doubleAll', function() {
  it('returns an array of elements doubled', function() {
    assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  });

  it('returns empty array when argument is also empty array', function() {
    assert.deepEqual(doubleAll([]), []);
  });
});
