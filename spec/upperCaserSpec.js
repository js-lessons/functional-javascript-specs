var assert = require('assert');
var upperCaser = require('../new/upperCaser');

describe('upperCaser', function() {
  it('returns text uppercased', function() {
    assert.equal(upperCaser('text'), 'TEXT');
  });
});
