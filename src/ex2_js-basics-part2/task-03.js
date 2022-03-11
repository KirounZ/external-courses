function listeArr(arr) {
  let sumOdd = 0;
  let sumPar = 0;
  let sumNull = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(arr[i])) {
      if (arr[i] === 0) {
        sumNull += 1;
      } else if (arr[i] % 2 === 0) {
        sumPar += 1;
      } else {
        sumOdd += 1;
      }
    }
  }

  return [sumPar, sumOdd, sumNull];
}

module.exports = listeArr;
