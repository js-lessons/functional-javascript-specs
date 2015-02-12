var assert = require('assert');
var sinon = require('sinon');
var repeat = require('../src/repeat');

describe('repeat', function() {
  var operation;

  beforeEach(function() {
    operation = sinon.spy();
  });

  it('repeats an operation provided number of times', function() {
    repeat(operation, 5);
    assert.equal(operation.callCount, 5);
  });

  it('doesnt perform the operation if number is 0', function() {
    repeat(operation, 0);
    sinon.assert.notCalled(operation);
  });

  it('doesnt perform the operation if number is negative', function() {
    repeat(operation, -2);
    sinon.assert.notCalled(operation);
  });
});
