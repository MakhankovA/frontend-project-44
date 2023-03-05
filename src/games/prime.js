import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeNumber = (upperLimit) => {
  let primeNumber = 2;
  for (let i = upperLimit; ; i -= 1) {
    if (isPrimeNumber(i)) {
      primeNumber = i;
      return primeNumber;
    }
  }
};

const getGameData = () => {
  const randomPrimeNumber = generatePrimeNumber(getRandomNum(0, 100));
  const randomNumber = getRandomNum(0, 100);
  const numbers = [randomPrimeNumber, randomNumber];
  const question = numbers[getRandomNum(0, numbers.length - 1)];
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => {
  runGameEngine(gameQuestion, getGameData);
};

export default runBrainPrime;
