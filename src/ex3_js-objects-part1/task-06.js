function getProperty(object, propertyPath) {
  const keys = propertyPath.split('.');
  let current = object;

  for (let i = 0; i < keys.length; i += 1) {
    if (Object.hasOwn(current, keys[i])) {
      current = current[keys[i]];
    } else {
      current = undefined;
      break;
    }
  }
  return current;
}

module.exports = getProperty;
