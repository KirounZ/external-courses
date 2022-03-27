function reduce(array, callback, initialValue) {
  let i;
  const length = array.length;
  let previousValue = initialValue;

  if (initialValue === undefined) {
    previousValue = array[0];

    for (i = 1; i < length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }

  for (i = 0; i < length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
