function identArr(arr) {
  let maxInArr = arr[0];

  arr.forEach((elem, index) => {
    if (index > 0 && maxInArr < elem) {
      maxInArr = elem;
    }
  });

  return maxInArr;
}

module.exports = identArr;
