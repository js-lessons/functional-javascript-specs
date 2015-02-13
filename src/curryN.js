//function curryN(fn, n, args) {
  //n = typeof n == 'undefined' ? fn.length : n;
  //args = args || [];

  //if (n <= 0) {
    //return fn.apply(null, args);
  //} else {
    //return function (a) {
      //var newArgs = args.slice();
      //newArgs.push(a);
      //return curryN(fn, --n, newArgs);
    //}
  //}
//}

function curryN(fn, n) {
  // If `n` argument was omitted, use the function .length property.
  if (typeof n !== 'number') n = fn.length

  function getCurriedFn(prev) {
    return function(arg) {
      // Concat the just-specified argument with the array of
      // previously-specified arguments.
      var args = prev.concat(arg)
      // Not all arguments have been satisfied yet, so return a curried
      // version of the original function.
      if (args.length < n) return getCurriedFn(args)
      // Otherwise, invoke the original function with the arguments and
      // return its value.
      else return fn.apply(this, args)
    };
  }

  // Return a curried version of the original function.
  return getCurriedFn([])
}

module.exports = curryN
