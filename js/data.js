import {
  getRandomInteger,
  getRandomArrayElement,
  getRandomMessage,
  getPostId,
  getCommentId,
  getPhotoId,
} from './util.js';

import {
  DESCRIPTION,
  LIKE_MIN,
  LIKE_MAX,
  AVATAR_COUNT,
  COMMENT_COUNT,
  NAME,
  PICTURE_COUNT,
} from './constants.js';

const getPost = () => ({
  id: getPostId(),
  url: `photos/${getPhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, () => ({
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: getRandomMessage(),
    name: getRandomArrayElement(NAME),
  })),
});

const generatePosts = () => Array.from({ length: PICTURE_COUNT }, getPost);

export { generatePosts };
