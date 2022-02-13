import getRandomNumber from '../randomizer-num.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  let divisionsCount = 0;

  if (num <= 1) {
    return false;
  }

  for (let division = 1; division <= num; division += 1) {
    if (num % division === 0) {
      divisionsCount += 1;
    }
    if (divisionsCount > 2) {
      return false;
    }
  }

  return true;
};

export const gamePrime = () => {
  const numRandom = getRandomNumber(0, 20);
  const correctAnswer = isPrimeNumber(numRandom) ? 'yes' : 'no';

  const gameElements = [numRandom, correctAnswer];

  return gameElements;
};
