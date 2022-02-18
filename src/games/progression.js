import getRandomNumber from '../randomizer-num.js';

export const rules = 'What number is missing in the progression?';

const getProgression = (firstNumber, multiplicator, length, hiddenIndex) => {
  const progresNumbers = [];

  for (let i = 0; i < length; i += 1) {
    progresNumbers.push(firstNumber + (multiplicator * i));
  }

  progresNumbers[hiddenIndex] = '..';

  return progresNumbers.join(' ');
};

export const generateGameProgressin = () => {
  const firstNumber = getRandomNumber(0, 20);
  const length = getRandomNumber(5, 15);
  const multiplicator = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const answer = String(firstNumber + (multiplicator * hiddenIndex));
  const question = getProgression(firstNumber, multiplicator, length, hiddenIndex);

  return [question, answer];
};
