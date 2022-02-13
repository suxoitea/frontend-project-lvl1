import getRandomNumber from '../randomizer-num.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenParity = (num) => {
  const isNumEven = num % 2 === 0;
  return isNumEven;
};

export const gameEven = () => {
  const numRandom = getRandomNumber(0, 100);
  const correctAnswer = evenParity(numRandom) ? 'yes' : 'no';

  const gameElements = [numRandom, correctAnswer];

  return gameElements;
};
