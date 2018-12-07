import engine, { getRandomNumber } from '..';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rightAnswer = (a, b) => {
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a;
    if (a > b) return rightAnswer(a - b, b);
    return rightAnswer(a, b - a);
  };
  const getQuestion = () => `${getRandomNumber(50)} ${getRandomNumber(50)}`;
  const getRightAnswer = (question) => {
    const [a, b] = question.split(' ');
    return String(rightAnswer(Number(a), Number(b)));
  };
  engine(description, getQuestion, getRightAnswer);
};
