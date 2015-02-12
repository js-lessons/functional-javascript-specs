var assert = require('assert');
var sinon = require('sinon');
var repeat = require('../new/repeat');

describe('repeat', function() {
  it('repeats an operation provided number of times', function() {
    var operation = sinon.spy();
    repeat(operation, 5);
    assert.equal(operation.callCount, 5);
  });
});
