function some(array, callback) {
  let i;
  const length = array.length;

  for (i = 0; i < length; i += 1) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }

  return false;
}

module.exports = some;
