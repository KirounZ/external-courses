function iteratingOverAnArray(arr) {
  arr.forEach((item) => {
    console.log(item);
  });

  console.log(Object.keys(arr).length);
}

module.exports = iteratingOverAnArray;
