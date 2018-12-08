import engine from '..';
import getRandomNumber from '../utils';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const isEven = number => number % 2 === 0;
  const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');
  const getGameData = () => {
    const question = getRandomNumber(1, 100);
    const answer = getRightAnswer(question);
    return { question, answer };
  };
  engine(description, getGameData);
};
