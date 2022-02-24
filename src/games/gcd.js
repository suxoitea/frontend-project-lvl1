import getRandomNumber from '../randomizer-num.js';
import runGameProcess from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  if (num1 === 1 || num2 === 1) {
    return 1;
  }
  const iter = (counter) => {
    if ((num1 % counter === 0) && (num2 % counter === 0)) {
      return counter;
    }
    return iter(counter - 1);
  };
  return iter(num1);
};

const generateGameCommonDivisor = () => {
  const firstRandomNum = getRandomNumber(1, 20);
  const secondRandomNum = getRandomNumber(1, 20);

  const question = `${firstRandomNum} ${secondRandomNum}`;
  const answer = String(greatestDivisor(firstRandomNum, secondRandomNum));

  return [question, answer];
};

export default () => runGameProcess(rules, generateGameCommonDivisor);
