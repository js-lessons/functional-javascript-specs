var expect = require('chai').expect;
var sinon = require('sinon');
var arrayMap = require('../src/arrayMap');

describe('arrayMap', function() {
  var square = function(x) { return x * x; }

  it('applies function to every element in provided array', function() {
    expect(arrayMap([1, 2, 3], square)).to.deep.equal([1, 4, 9]);
  });

  it('works for empty array', function() {
    expect(arrayMap([], square)).to.deep.equal([]);
  });

  it('calls Array#reduce', function() {
    sinon.spy(Array.prototype, 'reduce');
    arrayMap([1, 2, 3], square);

    expect(Array.prototype.reduce.calledOnce).to.be.true;

    Array.prototype.reduce.restore();
  });
});
