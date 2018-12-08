import engine from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const numberOfElements = 10;
const getGameData = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = [start];
  for (let i = 1; i <= numberOfElements; i += 1) {
    progression.push(start + i * step);
  }
  const index = getRandomNumber(0, numberOfElements - 1);
  const answer = String(progression[index]);
  const question = [...progression.slice(0, index), '..', ...progression.slice(index + 1)].join(
    ' ',
  );
  return { answer, question };
};

export default () => {
  engine(description, getGameData);
};
