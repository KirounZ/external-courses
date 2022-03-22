function duplicateCharOut(newStr) {
  const result = {};

  for (let i = 0; i < newStr.length; i += 1) {
    const charNewStr = newStr[i];

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
