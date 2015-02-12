var reduce = Function.call.bind(Array.prototype.reduce);
var hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

function duckCount() {
  return reduce(arguments, function(memo, el) {
    return hasOwnProperty(el, 'quack') ? ++memo : memo;
  }, 0);
}

module.exports = duckCount
