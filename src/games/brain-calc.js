import readlineSync from 'readline-sync';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const rightAnswer = (num1, num2) => (op) => {
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

const brainCalc = () => {
  const greetings = 'Welcome to the Brain Games!';
  const gameRules = 'What is the result of the expression?';

  console.log(greetings);
  console.log(gameRules);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const maxRounds = 3;
  const getRandomOperator = () => {
    const operators = '+-*';
    const operator = operators[getRandomNumber(operators.length)];
    return operator;
  };
  for (let i = 0; i < maxRounds; i += 1) {
    const a = getRandomNumber(10);
    const b = getRandomNumber(10);
    const operator = getRandomOperator();
    const question = `${a} ${operator} ${b}`;
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    const answer = rightAnswer(a, b)(operator);
    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
