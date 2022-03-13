function checkingForAProperty(inputString, passedObj) {
  if (passedObj.hasOwnProperty(inputString)) {
    return true;
  }

  return false;
}

module.exports = checkingForAProperty;
