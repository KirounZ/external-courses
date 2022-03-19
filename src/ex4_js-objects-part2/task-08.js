function conversionCamelCase(newStr) {
  const strInLowerCase = newStr.toLowerCase().split(' ');
  let strCamelCase = '';

  for (let i = 1; i < strInLowerCase.length; i += 1) {
    strCamelCase += `${strInLowerCase[i][0].toUpperCase() + strInLowerCase[i].slice(1)}`;
  }

  return strInLowerCase[0] + strCamelCase.trim();
}

module.exports = conversionCamelCase;
