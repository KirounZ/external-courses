function slice(array, begin, end) {
  const newArr = [];

  if ((begin < 0 && end === undefined) || (begin < 0 && end < 0)) {
    for (let i = array.length * -1; i < 0; i += 1) {
      if (i >= begin && end > i) {
        newArr.push(array.at(i));
      }

      if (i >= begin && end === undefined) {
        newArr.push(array.at(i));
      }

      if (begin === undefined && end === undefined) {
        newArr.push(array.at(i));
      }
    }
  } else {
    for (let i = 0; i < array.length; i += 1) {
      if (i >= begin && end > i) {
        newArr.push(array[i]);
      }

      if (i >= begin && end === undefined) {
        newArr.push(array[i]);
      }

      if (begin === undefined && end === undefined) {
        newArr.push(array[i]);
      }
    }
  }

  return newArr;
}

module.exports = slice;
