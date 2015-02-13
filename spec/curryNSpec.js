var expect = require('chai').expect;
var curryN = require('../src/curryN');

describe('curryN', function() {
  var add3 = function(one, two, three) {
    return one + two + three;
  }

  it('returns a function', function() {
    expect(curryN(add3)).to.be.a('function');
  });

  it('should use the fn\'s arity as the value for n', function() {
    expect(curryN(add3)(1)(2)(3)).to.equal(6);
  });
});
