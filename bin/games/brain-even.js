#!/usr/bin/env node
import executeGame from '../../src/index.js';
import getRandomCount from '../../src/randomizer-num.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenParity = (num) => {
  const isNumEven = num % 2 === 0;
  const result = isNumEven ? 'yes' : 'no';

  return result;
};

const gameEven = () => {
  const numRandom = getRandomCount(0, 100);
  const correctAnswer = evenParity(numRandom);

  const gameElemets = [numRandom, correctAnswer];

  return gameElemets;
};

executeGame(rules, gameEven);
