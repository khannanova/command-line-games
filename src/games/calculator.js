import engine from '..';
import getRandomNumber from '../utils';

export default () => {
  const description = 'What is the result of the expression?';
  const getRandomOperator = () => {
    const operators = '+-*';
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    return operator;
  };
  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 'error';
    }
  };
  const getRightAnswer = (question) => {
    const [num1, operator, num2] = question.split(' ');
    return String(calculate(Number(num1), Number(num2), operator));
  };
  const getGameData = () => {
    const question = `${getRandomNumber(1, 10)} ${getRandomOperator()} ${getRandomNumber(1, 10)}`;
    const answer = getRightAnswer(question);
    return { question, answer };
  };

  engine(description, getGameData);
};
