function ucFirstAll(newStr) {
  let strUpCase = '';
  const massNewStr = newStr.split(' ');

  if (!newStr) return newStr;

  for (let i = 0; i < massNewStr.length; i += 1) {
    strUpCase += `${massNewStr[i][0].toUpperCase() + massNewStr[i].slice(1)} `;
  }

  return strUpCase.trim();
}

module.exports = ucFirstAll;
