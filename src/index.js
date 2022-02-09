import readlineSync from 'readline-sync';

const runGameProcess = (rules, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const [gameAsk, correctAnswer] = game();
    console.log(`Question: ${gameAsk}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGameProcess;
