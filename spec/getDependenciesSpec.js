var expect = require('chai').expect;
var getDependencies = require('../src/getDependencies');

describe('getDependencies', function() {
  var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  }

  it('should collect all dependencies', function() {
    expect(getDependencies(loremIpsum)).to.deep.equal(['inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2'])
  });
});
