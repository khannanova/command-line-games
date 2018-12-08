import engine from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
const getRandomOperator = () => {
  const operators = '+-*';
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  return operator;
};

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'error';
  }
};

const getGameData = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calculate(firstOperand, secondOperand, operator));
  return { question, answer };
};

export default () => {
  engine(description, getGameData);
};
