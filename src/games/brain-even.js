import readlineSync from 'readline-sync';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const brainEven = () => {
  const greetings = 'Welcome to the Brain Games!';
  const gameRules = 'Answer "yes" if number even otherwise answer "no".';

  console.log(greetings);
  console.log(gameRules);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const game = () => {
    const isEven = number => number % 2 === 0;
    const maxRounds = 3;
    for (let i = 0; i < maxRounds; i += 1) {
      const question = getRandomNumber(1000);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const rightAnswer = isEven(question) ? 'yes' : 'no';
      if (userAnswer !== rightAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
  };
  game();
};

export default brainEven;
