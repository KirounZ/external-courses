let bufer = 0;
const Calculator = {
  add(addNum) {
    if (addNum !== undefined) {
      bufer += addNum;

      return this;
    }

    return false;
  },

  subtract(addNum) {
    if (addNum !== undefined) {
      bufer -= addNum;

      return this;
    }

    return false;
  },

  divide(addNum) {
    if (addNum !== undefined) {
      bufer /= addNum;

      return this;
    }

    return false;
  },

  multiply(addNum) {
    if (addNum !== undefined) {
      bufer *= addNum;

      return this;
    }

    return false;
  },

  reset() {
    bufer = 0;

    return this;
  },

  setState(addNum) {
    if (addNum !== undefined) {
      bufer = addNum;

      return this;
    }

    return false;
  },

  fetchData() {
    bufer = 500;

    return this;
  },

  getResult() {
    return bufer;
  },
};

Calculator.add();
Calculator.subtract();
Calculator.divide();
Calculator.multiply();
Calculator.reset();
Calculator.setState();
Calculator.fetchData();
Calculator.getResult();
