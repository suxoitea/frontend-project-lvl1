#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomCount = () => Math.ceil(Math.random() * 100);

const evenParity = (num) => {
  const isNumEven = num % 2 === 0;
  const result = isNumEven ? 'yes' : 'no';

  return result;
};

const print = console.log;

const gameEven = () => {
  print('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  print(`Hello, ${userName}!`);

  print('Answer "yes" if the number is even, otherwise answer "no".');

  let userWinPoint = 0;
  const questionCount = 3;
  let askCount = 0;

  while (askCount < questionCount) {
    const numRandom = randomCount();
    const currectAnswer = evenParity(numRandom);
    print(`Question: ${numRandom}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === currectAnswer) {
      print('Correct!');
      userWinPoint += 1;
      askCount += 1;
    } else {
      print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'.\nLet's try again, ${userName}!`);

      break;
    }
  }

  if (userWinPoint === 3) {
    print(`Congratulations, ${userName}!`);
  }
};

gameEven();
