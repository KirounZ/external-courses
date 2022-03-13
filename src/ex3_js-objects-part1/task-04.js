function addNewProperty(inputString, passedObj) {
  if (passedObj.hasOwnProperty(inputString)) {
    return passedObj;
  }
  const testObjWithProto = passedObj;
  testObjWithProto[inputString] = 'new';

  return testObjWithProto;
}

module.exports = addNewProperty;
