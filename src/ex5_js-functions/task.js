function Calculator() {
  let bufer = 0;

  return {
    add: function sumNum(addNum) {
      if (addNum !== undefined) {
        bufer += addNum;
      }

      return sumNum;
    },

    subtract: function subNum(addNum) {
      if (addNum !== undefined) {
        bufer -= addNum;
      }

      return subNum;
    },

    divide: function divNum(addNum) {
      if (addNum !== undefined) {
        bufer /= addNum;
      }

      return divNum;
    },

    multiply: function mulNum(addNum) {
      if (addNum !== undefined) {
        bufer *= addNum;
      }

      return mulNum;
    },

    getResult() {
      return bufer;
    },

    reset() {
      bufer = 0;

      return bufer;
    },
  };
}

const calculator = Calculator();

calculator.add();
calculator.subtract();
calculator.divide();
calculator.multiply();

module.exports = calculator;
