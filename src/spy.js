var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  var originalFunction = target[method]

  var result = {
    count: 0,
    args: []
  }

  target[method] = function() {
    result.count++;
    result.args.push(slice(arguments, 0));
    return originalFunction.apply(target, arguments);
  }

  return result
}

module.exports = Spy
