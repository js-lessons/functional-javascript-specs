var expect = require('chai').expect;
var sinon = require('sinon');
var logger = require('../src/logger');
var loggerBind = require('../src/loggerBind');

describe('logger', function() {
  afterEach(function() {
    console.log.restore && console.log.restore();
  });

  [logger, loggerBind].forEach(function(logger) {
    it('returns a function', function() {
      expect(logger('INFO:')).to.be.a('function');
    });

    it('appends a namespace to log messages', function() {
      sinon.stub(console, 'log').returns(true);

      logger('INFO:')('test');
      expect(console.log.calledWith('INFO:', 'test')).to.be.true;
    });

    it('takes any number of arguments', function() {
      sinon.stub(console, 'log').returns(true);

      logger('DEBUG:')('this', ' is', ' test');
      expect(console.log.calledWith('DEBUG:', 'this', ' is', ' test')).to.be.true;
    });
  });
});
