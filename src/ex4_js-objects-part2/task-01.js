function serchNameProp(NameProp, newObj) {
  const PrototypeNewObj = Object.create(newObj);
  PrototypeNewObj.b = 2;

  if (!PrototypeNewObj.hasOwnProperty(NameProp)) {
    return newObj[NameProp];
  }

  return undefined;
}

module.exports = serchNameProp;
