function insertStr(newStr, wordToInsert, numberToInsert) {
  const objInStr = newStr.split(' ');
  let strWithNewLine = '';

  for (let i = 0; i < objInStr.length; i += 1) {
    if (i - 1 === numberToInsert) {
      strWithNewLine += `${wordToInsert} `;
    }
    strWithNewLine += `${objInStr[i]} `;
  }

  return strWithNewLine.trim();
}

module.exports = insertStr;
