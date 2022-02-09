import getRandomNumber from '../randomizer-num.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenParity = (num) => {
  const isNumEven = num % 2 === 0;
  const result = isNumEven ? 'yes' : 'no';

  return result;
};

export const gameEven = () => {
  const numRandom = getRandomNumber(0, 100);
  const correctAnswer = evenParity(numRandom);

  const gameElemets = [numRandom, correctAnswer];

  return gameElemets;
};
