function every(array, callback) {
  let i;
  const length = array.length;

  for (i = 0; i < length; i += 1) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

module.exports = every;
