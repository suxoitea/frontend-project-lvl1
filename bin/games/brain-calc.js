#!/usr/bin/env node
import executeGame from '../../src/index.js';
import getRandomCount from '../../src/randomizer-num.js';

const rulesGame = 'What is the result of the expression?';

const getRandomOperation = () => {
  const mathOperations = [
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['*', (x, y) => x * y],
  ];
  const randomNum = getRandomCount(0, mathOperations.length - 1);

  return mathOperations[randomNum];
};

const gameCalc = () => {
  const num1 = getRandomCount(0, 10);
  const num2 = getRandomCount(0, 10);
  const operator = getRandomOperation();

  const gameElemets = [`${num1} ${operator[0]} ${num2}`];
  const correctAnswer = operator[1](num1, num2);

  gameElemets[1] = String(correctAnswer);

  return gameElemets;
};

executeGame(rulesGame, gameCalc);
