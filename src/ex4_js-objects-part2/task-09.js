function insertStr(newStr, wordToInsert, numberToInsert) {
  const objInStr = newStr.split(' ');
  let StrWithNewLine = '';

  for (let keybNewStr = 0; keybNewStr < objInStr.length; keybNewStr += 1) {
    if (keybNewStr - 1 === numberToInsert) {
      StrWithNewLine += `${wordToInsert} `;
    }
    StrWithNewLine += `${objInStr[keybNewStr]} `;
  }

  return StrWithNewLine.trim();
}

module.exports = insertStr;
