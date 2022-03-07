function listeArr(arr) {
  let sumOdd = 0; // Нечетные
  let sumPar = 0; // Четные
  let sumNull = 0; // Нули

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

  const arrOut = [sumPar, sumOdd, sumNull];

  return arrOut;
}

module.exports = listeArr;
