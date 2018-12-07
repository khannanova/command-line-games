import engine, { getRandomNumber } from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => getRandomNumber(1000);
  const checkFunction = number => number % 2 === 0;
  const getRightAnswer = question => (checkFunction(question) ? 'yes' : 'no');
  engine(description, getQuestion, getRightAnswer);
};
