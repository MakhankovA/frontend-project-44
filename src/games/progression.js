import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const gameQuestion = 'What number is missing in the progression?';
const getProgression = (startNumber, stepNumber, length) => {
  const progression = [];
  let number = startNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(number);
    number += stepNumber;
  }
  return progression;
};

const getGameData = () => {
  const lengthOfProgression = 10
  const startNumber = getRandomNum(0, 100);
  const stepNumber = getRandomNum(0, 100);
  const progression = getProgression(
    startNumber,
    stepNumber,
    lengthOfProgression,
  );
  const secretNumberIndex = getRandomNum(0, lengthOfProgression - 1);
  const copiedProgression = progression.slice();
  copiedProgression[secretNumberIndex] = '..';
  const question = copiedProgression.join(' ');
  const correctAnswer = progression[secretNumberIndex].toString();
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  runGameEngine(gameQuestion, getGameData);
};

export default runBrainProgression;