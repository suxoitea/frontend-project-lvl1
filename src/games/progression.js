import getRandomNumber from '../randomizer-num.js';

export const rules = 'What number is missing in the progression?';

const getProgression = (firstNumber, multiplicator, lengthProgression, hiddenIndex) => {
  const progresNumbers = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progresNumbers.push(firstNumber + (multiplicator * i));
  }

  progresNumbers[hiddenIndex] = '..';

  return progresNumbers.join(' ');
};

export const gameProgressin = () => {
  const firstNumber = getRandomNumber(0, 20);
  const lengthProgression = getRandomNumber(5, 15);
  const multiplicator = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, lengthProgression - 1);

  const correctAnswer = firstNumber + (multiplicator * hiddenIndex);
  const progression = getProgression(firstNumber, multiplicator, lengthProgression, hiddenIndex);

  const gameElements = [progression, String(correctAnswer)];

  return gameElements;
};
