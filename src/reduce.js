function reduce(array, f, start) {
  var current = start === undefined ? array.shift() : start;

  for (var i = 0; i < array.length; i++)
    current = f(current, array[i]);

  return current;
}

module.exports = reduce;
