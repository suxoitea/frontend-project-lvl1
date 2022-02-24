import getRandomNumber from '../randomizer-num.js';
import runGameProcess from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenParity = (num) => num % 2 === 0;

const generateGameEven = () => {
  const question = getRandomNumber(0, 100);
  const answer = evenParity(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runGameProcess(rules, generateGameEven);
