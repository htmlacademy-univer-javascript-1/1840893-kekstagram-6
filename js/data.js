import {
  getRandomInteger,
  getRandomArrayElement,
  getRandomMessage,
} from './util.js';

import {DESCRIPTION, LIKE_MIN, LIKE_MAX, AVATAR_COUNT, COMMENT_COUNT, NAME, PICTURE_COUNT} from './constants.js';

const getPost = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    (_, commentId) => ({
      id: commentId + 1,
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: getRandomMessage(),
      name: getRandomArrayElement(NAME),
    })
  ),
});

const post = () =>
  Array.from({ length: PICTURE_COUNT }, (_, id) => getPost(id));

export { post };
