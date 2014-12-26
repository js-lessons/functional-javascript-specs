function duckCount() {
  return Array.prototype.reduce.call(arguments, function(memo, el) {
    return Array.prototype.hasOwnProperty.call(el, 'quack') ? ++memo : memo;
  }, 0);
}

// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }

module.exports = duckCount
