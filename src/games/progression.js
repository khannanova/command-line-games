import engine from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const numberOfElements = 10;
const getGameData = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenElementPosition = getRandomNumber(0, numberOfElements - 1);
  const answer = String(progression[hiddenElementPosition]);
  const question = [
    ...progression.slice(0, hiddenElementPosition),
    '..',
    ...progression.slice(hiddenElementPosition + 1),
  ].join(' ');
  return { answer, question };
};

export default () => {
  engine(description, getGameData);
};
