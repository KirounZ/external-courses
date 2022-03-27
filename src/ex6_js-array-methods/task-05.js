function map(array, callback) {
  let i;
  const length = array.length;
  const results = [];

  for (i = 0; i < length; i += 1) {
    results.push(callback(array[i], i, array));
  }

  return results;
}

module.exports = map;
