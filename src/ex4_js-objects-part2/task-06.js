function ucFirstAll(newStr) {
  let StrUpCase = '';
  const massNewStr = newStr.split(' ');

  if (!newStr) return newStr;

  for (let keybNewStr = 0; keybNewStr < massNewStr.length; keybNewStr += 1) {
    StrUpCase += `${massNewStr[keybNewStr][0].toUpperCase() + massNewStr[keybNewStr].slice(1)} `;
  }

  return StrUpCase.trim();
}

module.exports = ucFirstAll;
