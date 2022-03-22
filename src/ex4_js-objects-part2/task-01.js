function serchNameProp(nameProp, newObj) {
  if (newObj.hasOwnProperty(nameProp)) {
    return undefined;
  }

  return newObj[nameProp];
}

module.exports = serchNameProp;
