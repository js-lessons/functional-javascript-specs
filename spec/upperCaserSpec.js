var assert = require('assert');
var upperCaser = require('../src/upperCaser');

describe('upperCaser', function() {
  it('returns text uppercased', function() {
    assert.equal(upperCaser('text'), 'TEXT');
  });
});
