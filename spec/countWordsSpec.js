var assert = require('assert');
var countWords = require('../src/countWords');

describe('countWords', function() {
  it('returns object with words counted', function() {
    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

    assert.deepEqual(countWords(inputWords), {
      Apple: 2,
      Banana: 1,
      Durian: 3
    });
  });
});
