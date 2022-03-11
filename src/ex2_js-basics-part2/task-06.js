function primeNumTest(num) {
  const simple = `Число ${num} - простое число`;
  const notTrue = 'Данные неверны';
  const compound = `Число ${num} - составное число`;
  const notSimpAndComp = 'Не причисляется ни к простым, ни к составным числам';

  if (num <= 1000) {
    if (num === 0 || num === 1) {
      return notSimpAndComp;
    }

    if (num === 2) {
      return simple;
    }

    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return compound;
      }
    }

    return simple;
  }

  return notTrue;
}

module.exports = primeNumTest;
