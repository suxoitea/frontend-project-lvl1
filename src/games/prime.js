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

export const generateGamePrime = () => {
  const question = getRandomNumber(0, 20);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, answer];
};
