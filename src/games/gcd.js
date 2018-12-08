import engine from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a;
  if (a > b) return getGcd(a - b, b);
  return getGcd(a, b - a);
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));
  return { question, answer };
};

export default () => {
  engine(description, getGameData);
};
