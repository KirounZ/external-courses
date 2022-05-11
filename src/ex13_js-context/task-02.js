function Hangman(word) {
  this.word = word;
  let arrWord = Array.from(word);
  let errorsNum = 6;
  let errorsLetArray = [];
  let hiddenWordArray = new Array(arrWord.length).fill('_');
  let checkingArray = new Array(arrWord.length);

  this.guess = function inputLet(letter) {
    for (let i = 0; i < arrWord.length; i += 1) {
      if (letter === arrWord[i]) {
        hiddenWordArray[i] = letter;
        checkingArray[i] = letter;
      } else {
        checkingArray[i] = '_';
      }
    }

    const hiddenWord = hiddenWordArray.join('');

    if (checkingArray.every((item) => item === '_')) {
      errorsNum -= 1;

      if (errorsNum <= 0) {
        console.log('You lose'); // постоянно выводить "You lose" когда проиграл и пытаешься еще ввести буквы
      } else {
        errorsLetArray.unshift(letter);
        console.log(`wrong letter, errors left ${errorsNum} | ${errorsLetArray}`);
      }
    } else {
      console.log(hiddenWord);
    }

    if (!hiddenWordArray.includes('_')) {
      console.log(`${hiddenWord} | You won!`);
    }

    return this;
  };

  this.getGuessedString = function retLetter() {
    return hiddenWordArray.join('');
  };

  this.getErrorsLeft = function retErrNum() {
    return errorsNum;
  };

  this.getWrongSymbols = function retErrLet() {
    return errorsLetArray;
  };

  this.getStatus = function retStatus() {
    return `${hiddenWordArray.join('')} | errors left ${errorsNum}`;
  };

  this.startAgain = function newGame(newLetter) {
    errorsNum = 6;
    arrWord = Array.from(newLetter);
    errorsLetArray = [];
    hiddenWordArray = new Array(arrWord.length).fill('_');
    checkingArray = new Array(arrWord.length);
    return this;
  };
}

const hangman = new Hangman('webpurple');
console.log(hangman);
