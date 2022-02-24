import getRandomNumber from '../randomizer-num.js';
import runGameProcess from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (firstNumber, multiplicator, length) => {
  const progresNumbers = [];

  for (let i = 0; i < length; i += 1) {
    progresNumbers.push(firstNumber + (multiplicator * i));
  }

  return progresNumbers;
};

const generateGameProgression = () => {
  const firstNumber = getRandomNumber(0, 20);
  const length = getRandomNumber(5, 15);
  const multiplicator = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = getProgression(firstNumber, multiplicator, length);
  progression[hiddenIndex] = '..';

  const answer = String(firstNumber + (multiplicator * hiddenIndex));
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runGameProcess(rules, generateGameProgression);
