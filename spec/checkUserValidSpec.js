var assert = require('assert');
var checkUsersValid = require('../src/checkUsersValid');

describe('checkUserValid', function() {
  var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  var testAllValid = checkUsersValid(goodUsers)

  it('returns true if all valid', function() {
    assert.ok(testAllValid([
      { id: 2 },
      { id: 1 }
    ]));
  });

  it('returns false if not all valid', function() {
    assert.equal(testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ]), false);
  });
});
