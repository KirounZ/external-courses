function filter(array, callback) {
  let i;
  const length = array.length;
  const results = [];

  for (i = 0; i < length; i += 1) {
    if (callback(array[i], i, array)) {
      results.push(array[i]);
    }
  }

  return results;
}

module.exports = filter;
