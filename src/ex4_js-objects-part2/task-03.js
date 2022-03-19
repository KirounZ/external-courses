function delSpace(stringWithSpace) {
  if (stringWithSpace[0] === ' ' && stringWithSpace[stringWithSpace.length - 1] === ' ') {
    return stringWithSpace.substring(1, stringWithSpace.length - 1);
  }

  if (stringWithSpace[0] === ' ' && !(stringWithSpace[stringWithSpace.length - 1] === ' ')) {
    return stringWithSpace.substring(1, stringWithSpace.length);
  }

  if (!(stringWithSpace[0] === ' ') && stringWithSpace[stringWithSpace.length - 1] === ' ') {
    return stringWithSpace.substring(0, stringWithSpace.length - 1);
  }

  return stringWithSpace;
}

module.exports = delSpace;
