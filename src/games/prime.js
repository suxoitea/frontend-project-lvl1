import getRandomNumber from '../randomizer-num.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  let divisionsCount = 0;

  if (num <= 1) {
    return 'no';
  }

  for (let division = 1; division <= num; division += 1) {
    if (num % division === 0) {
      divisionsCount += 1;
    }
    if (divisionsCount > 2) {
      return 'no';
    }
  }

  return 'yes';
};

export const gamePrime = () => {
  const num = getRandomNumber(0, 20);
  const correctAnswer = isPrimeNumber(num);

  const gameElements = [num, correctAnswer];

  return gameElements;
};
