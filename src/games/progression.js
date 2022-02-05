import getRandomCount from '../randomizer-num.js';

export const rules = 'What number is missing in the progression?';

const getProgression = (startNum, multiplicator, length, hiddenIndex) => {
  const progresNumbers = [];

  for (let i = 0; i < length; i += 1) {
    progresNumbers.push(startNum + (multiplicator * i));
  }

  progresNumbers[hiddenIndex] = '..';

  return progresNumbers.join(' ');
};

export const gameProgressin = () => {
  const firstCount = getRandomCount(0, 20);
  const lengthProgression = getRandomCount(5, 15);
  const multiplicator = getRandomCount(1, 10);
  const hiddenIndex = getRandomCount(0, lengthProgression - 1);

  const correctAnswer = firstCount + (multiplicator * hiddenIndex);
  const progression = getProgression(firstCount, multiplicator, lengthProgression, hiddenIndex);

  const gameElements = [progression, String(correctAnswer)];

  return gameElements;
};
