function addNewProperty(objToCopy) {
  const objectReference = { ...objToCopy };

  return objectReference;
}

module.exports = addNewProperty;
