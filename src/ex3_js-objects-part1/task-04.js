function addNewProperty(inputString, passedObj) {
  const testObjWithProto = passedObj;

  if (testObjWithProto.hasOwnProperty(inputString)) {
    return testObjWithProto;
  }

  testObjWithProto[inputString] = 'new';

  return testObjWithProto;
}

module.exports = addNewProperty;
