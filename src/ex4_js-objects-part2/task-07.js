function ellipsisReplacement(newStr, newNumber) {
  if (newStr.length > newNumber) {
    return `${newStr.substring(0, newNumber - 1)}…`;
  }

  return newStr;
}

module.exports = ellipsisReplacement;
