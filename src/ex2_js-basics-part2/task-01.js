function argType(value) {
  if (typeof value === 'string' || value instanceof String) {
    return 'string';
  }

  if (Number.isInteger(value)) {
    return 'number';
  }

  return undefined;
}

module.exports = argType;
