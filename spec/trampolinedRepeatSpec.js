var expect = require('chai').expect;
var repeat = require('../src/trampolinedRepeat');

describe('trampolinedRepeat', function() {
  var count = 0;
  var operation = function() {
    count++;
  }

  it('repeats an operation provided number of times', function() {
    this.timeout(5000);
    repeat(operation, 100000);
    expect(count).to.equal(100000);
  });
});
