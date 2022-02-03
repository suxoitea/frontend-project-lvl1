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
  const randomNum = Math.floor(Math.random() * mathOperations.length);

  return mathOperations[randomNum];
};

const gameCalc = () => {
  const num1 = getRandomCount();
  const num2 = getRandomCount();
  const operator = getRandomOperation();

  const gameElemets = [`${num1} ${operator[0]} ${num2}`];
  const correctAnswer = operator[1](num1, num2);

  gameElemets[1] = String(correctAnswer);

  return gameElemets;
};

executeGame(rulesGame, gameCalc);
