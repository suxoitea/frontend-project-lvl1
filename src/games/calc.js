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
  const randomIndex = getRandomNumber(0, 3);

  const [operator, calculate] = getRandomOperation(randomIndex);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2));

  return [question, answer];
};
