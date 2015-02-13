var nonBlockingRepeat = require('../src/nonBlockingRepeat');

describe('nonBlockingRepeat', function() {
  var count = 0;
  var CYCLES = 100000;

  function operation() {
    for (var i = 0; i < 1000000; i++) {};  // burn some CPU cycles
    count++; // count how many times this function was called
  }

  it('should be interrupted in approximately 1 second', function(done) {
    var start = Date.now();

    nonBlockingRepeat(operation, CYCLES);

    setTimeout(function() {
      var end = Date.now()

      if (count === CYCLES) done('Fail! Should not have completed all operations!');

      if (end - start < 1500) {
        done();
      } else {
        done('Fail! Interrupted in '+ end - start + ' milliseconds');
      }
    }, 1000);
  });
});
