import getRandomNumber from '../randomizer-num.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenParity = (num) => num % 2 === 0;

export const generateGameEven = () => {
  const question = getRandomNumber(0, 100);
  const answer = evenParity(question) ? 'yes' : 'no';

  return [question, answer];
};
