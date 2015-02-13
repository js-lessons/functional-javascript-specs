var expect = require('chai').expect;
var sinon = require('sinon');
var slice = require('../src/slice');

describe('slice', function() {
  it('calls native slice', function() {
    sinon.spy(Array.prototype, 'slice');

    var res = slice([1, 2, 3], 1);

    expect(res).to.deep.equal([2, 3]);
  })
});
