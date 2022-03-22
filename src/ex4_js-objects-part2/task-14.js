function randNumb(minNumb, maxNumb) {
  return Math.floor(minNumb + Math.random() * (maxNumb - minNumb));
}

module.exports = randNumb;
