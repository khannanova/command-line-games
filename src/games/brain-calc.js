import engine, { getRandomNumber } from '..';

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const getRandomOperator = () => {
    const operators = '+-*';
    const operator = operators[getRandomNumber(operators.length)];
    return operator;
  };
  const rightAnswer = (num1, num2, op) => {
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
  const getQuestion = () => `${getRandomNumber(10)} ${getRandomOperator()} ${getRandomNumber(10)}`;
  const getRightAnswer = (question) => {
    const [num1, operator, num2] = question.split(' ');
    return String(rightAnswer(Number(num1), Number(num2), operator));
  };
  engine(description, getQuestion, getRightAnswer);
};

export default brainCalc;
