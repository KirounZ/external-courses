function ucFirst(newStr) {
  if (!newStr) return newStr;

  return newStr[0].toUpperCase() + newStr.slice(1);
}

module.exports = ucFirst;
