import readlineSync from 'readline-sync';

const gameRounds = 3;

const runGameProcess = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [gameAsk, correctAnswer] = generateRound();
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
