import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

  const game = () => {
    let count = 0;
    while (count < 3) {
      const randomNumber = getRandomNumber(1000);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
        count += 1;
        console.log('Correct!');
      } else if (randomNumber % 2 === 0 && userAnswer !== 'yes') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes.'\n Let's try again, ${userName}!`);
        return;
      } else if (randomNumber % 2 !== 0 && userAnswer !== 'no') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no.'\n Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  game();
};

export default brainEven;
