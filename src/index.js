import readlineSync from 'readline-sync';

export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const engine = (description, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = getRightAnswer(question);
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
