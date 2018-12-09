import engine from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= number; i += 1) {
    if (number % 2 === 0 && number !== 2) return false;
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  engine(description, getGameData);
};
