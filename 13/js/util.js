import { MESSAGE } from './constants.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomMessage = () => {
  const firstSentence = getRandomArrayElement(MESSAGE);
  return getRandomInteger(1, 2) === 1
    ? firstSentence
    : `${firstSentence} ${getRandomArrayElement(MESSAGE)}`;
};

let postId = 0;
let commentId = 0;
let photoId = 0;
const getPostId = () => ++postId;
const getCommentId = () => ++commentId;
const getPhotoId = () => ++photoId;

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomInteger,
  getRandomArrayElement,
  getRandomMessage,
  getPostId,
  getCommentId,
  getPhotoId,
  debounce,
};
