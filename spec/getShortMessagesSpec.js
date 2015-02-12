var assert = require('assert');
var getShortMessages = require('../src/getShortMessages');

describe('getShortMessages', function() {
  var messages = [
    { message: 'Occaecat adipisicing ipsum reprehenderit veniam sint.' },
    { message: 'Ipsum velit minim aute enim.' },
    { message: 'Ex velit irure dolor aute eiusmod laborum aliqua ex quis laboris magna.' },
    { message: 'Laboris magna consectetur sit.' }
  ];

  it('returns messages with legth < 50', function() {
    assert.deepEqual(getShortMessages(messages),
      [
        'Ipsum velit minim aute enim.',
        'Laboris magna consectetur sit.'
      ]);
  });

  it('returns empty array when argument is also empty array', function() {
    assert.deepEqual(getShortMessages([]), []);
  });
});
