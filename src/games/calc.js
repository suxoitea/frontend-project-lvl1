import getRandomNumber from '../randomizer-num.js';
import runGameProcess from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperation = (randomIndex) => {
  const mathOperations = [
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['*', (x, y) => x * y],
  ];

  return mathOperations[randomIndex];
};

const generateGameCalc = () => {
  const firstRandomNum = getRandomNumber(0, 10);
  const secondRandomNum = getRandomNumber(0, 10);
  const randomIndex = getRandomNumber(0, 2);

  const [operator, calc] = getRandomOperation(randomIndex);

  const question = `${firstRandomNum} ${operator} ${secondRandomNum}`;
  const answer = String(calc(firstRandomNum, secondRandomNum));

  return [question, answer];
};

export default () => runGameProcess(rules, generateGameCalc);
