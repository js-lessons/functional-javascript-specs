var assert = require('assert');
var duckCount = require('../src/duckCount');

describe('duckCount', function() {
  var obj1 = Object.create(null); obj1.quack = true;
  var obj2 = Object.create(null); obj2.quack = undefined;
  var proto1 = Object.create(null); proto1.quack = true; var obj3 =  Object.create(proto1);
  var proto2 = Object.create(null); proto2.quack = true; var obj4 = Object.create(proto2); obj4.quack = undefined;

  var objects = [
    { quack: true },
    { quack: false },
    Object.create({ quack: true }),
    {
      quack: true,
      hasOwnProperty: function() {
        return false
      }
    },
    obj1,
    obj2,
    obj3,
    obj4
  ]

  it('counts ducks', function() {
    assert.equal(duckCount.apply(null, objects), 6);
  });
});
