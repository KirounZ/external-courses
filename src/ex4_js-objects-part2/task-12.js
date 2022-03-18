function sumAndRound(numOne, numTwo) {
  return (Math.round((numOne + numTwo) * 10 ** 3)) / 10 ** 3;
}

module.exports = sumAndRound;
