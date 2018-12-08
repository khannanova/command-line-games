import readlineSync from 'readline-sync';

const maxRounds = 3;
const engine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  for (let i = 0; i < maxRounds; i += 1) {
    const { question, answer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
