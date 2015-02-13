var expect = require('chai').expect;
var Spy = require('../src/spy');

describe('Spy', function() {
  var spy, target;

  beforeEach(function() {
    target = {
      run: function() { return 42; }
    }

    spy = Spy(target, 'run');
  });

  it('counts target calls', function() {
    target.run();
    target.run();
    target.run();

    expect(spy.count).to.be.equal(3);
  });

  it('saves call arguments', function() {
    target.run('log', 'this');
    target.run('damn');
    target.run('call');

    expect(spy.args).to.be.deep.equal([['log', 'this'], ['damn'], ['call']]);
  });

  it('should not rewrite original function', function() {
    expect(target.run()).to.be.equal(42);
  });
});
