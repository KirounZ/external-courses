function conversionCamelCase(newStr) {
  const objInLowerCase = newStr.toLowerCase().split(' ');
  let StrCamelCase = '';

  for (let keybNewStr = 1; keybNewStr < objInLowerCase.length; keybNewStr += 1) {
    StrCamelCase += `${objInLowerCase[keybNewStr][0].toUpperCase() + objInLowerCase[keybNewStr].slice(1)}`;
  }

  return objInLowerCase[0] + StrCamelCase.trim();
}

module.exports = conversionCamelCase;
