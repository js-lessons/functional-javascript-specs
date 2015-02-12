var assert = require('assert');
var reduce = require('../src/reduce');

describe('reduce', function() {
  var mult = function(a, b) { return a * b; }
  var sum = function(a, b) { return a + b; }

  it('folds an array to single value by applying function to current value and accumulator', function() {
    assert.equal(reduce([1, 2, 3, 4], mult, 1), 24);
  });

  it('takes a value to start folding from', function() {
    assert.equal(reduce([1, 2], mult, 3), 6);
  });

  it('uses first item as a start value if it wasnt provided', function() {
    assert.equal(reduce([2, 3, 4], sum), 9);
  });

  it('works for empty array', function() {
    assert.equal(reduce([], mult, 1), 1);
    assert.equal(reduce([], mult), undefined);
  });
});
