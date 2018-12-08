import engine from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  engine(description, getGameData);
};
