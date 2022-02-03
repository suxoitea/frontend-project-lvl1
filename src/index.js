import readlineSync from 'readline-sync';

const print = console.log;

const executeGame = (rules, game) => {
  print('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  print(`Hello, ${userName}!`);
  print(rules);

  let userWinPoint = 0;
  const questionCount = 3;
  let askCount = 0;

  while (askCount < questionCount) {
    const [gameAsk, correctAnswer] = game();
    print(`Question: ${gameAsk}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      print('Correct!');
      userWinPoint += 1;
      askCount += 1;
    } else {
      print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

      break;
    }
  }

  if (userWinPoint === 3) {
    print(`Congratulations, ${userName}!`);
  }
};

export default executeGame;
