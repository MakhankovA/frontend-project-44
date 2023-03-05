import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (Math.min(num1, num2) === 0) {
    return Math.max(num1, num2);
  }
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getGameData = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const correctAnswer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  runGameEngine(gameQuestion, getGameData);
};

export default runBrainGcd;
