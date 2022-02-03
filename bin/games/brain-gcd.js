#!/usr/bin/env node
import getRandomCount from '../../src/randomizer-num.js';
import executeGame from '../../src/index.js';

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

const gameCommonDivisor = () => {
  const num1 = getRandomCount();
  const num2 = getRandomCount();
  const correctAnswer = String(greatestDivisor(num1, num2));

  const gameElements = [`${num1} ${num2}`, correctAnswer];

  return gameElements;
};

executeGame(rules, gameCommonDivisor);
