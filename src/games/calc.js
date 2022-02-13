import getRandomNumber from '../randomizer-num.js';

export const rules = 'What is the result of the expression?';

const getRandomOperation = (randomIndex) => {
  const mathOperations = [
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['*', (x, y) => x * y],
  ];

  return mathOperations[randomIndex];
};

export const gameCalc = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const randomIndex = getRandomNumber(0, 2);

  const [operator, calc] = getRandomOperation(randomIndex);

  const gameElements = [`${num1} ${operator} ${num2}`];
  const correctAnswer = calc(num1, num2);

  gameElements[1] = String(correctAnswer);

  return gameElements;
};
