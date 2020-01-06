export const memoize = function(fn) {
  let cache = {};

  return function(arg) {
    const context = this;

    if (arg in cache) {
      return cache[arg];
    } else {
      let result = fn.call(context, arg);
      cache[arg] = result;

      return result;
    }
  }
}
