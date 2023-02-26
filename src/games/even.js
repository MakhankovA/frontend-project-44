import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numIsEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(0, 100);
  const questionNumIsEven = numIsEven(question);
  const correctAnswer = questionNumIsEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainEven;
