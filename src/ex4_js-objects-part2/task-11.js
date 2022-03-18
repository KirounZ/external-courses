function duplicateCharOut(newStr) {
  const result = {};

  for (let numSymb = 0; numSymb < newStr.length; numSymb += 1) {
    const charNewStr = newStr[numSymb];
    if (!result[charNewStr]) {
      result[charNewStr] = 0;
    }
    result[charNewStr] += 1;
  }

  for (let resNewStr = 0; resNewStr < Object.entries(result).length; resNewStr += 1) {
    console.log(Object.entries(result)[resNewStr]);
  }
}

module.exports = duplicateCharOut;
