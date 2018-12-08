import engine from '..';
import getRandomNumber from '../utils';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGcd = (a, b) => {
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a;
    if (a > b) return getGcd(a - b, b);
    return getGcd(a, b - a);
  };
  const getRightAnswer = (question) => {
    const [a, b] = question.split(' ');
    return String(getGcd(Number(a), Number(b)));
  };
  const getGameData = () => {
    const question = `${getRandomNumber(50)} ${getRandomNumber(50)}`;
    const answer = getRightAnswer(question);
    return { question, answer };
  };
  engine(description, getGameData);
};
