import { REGEX_FOR_HASHTAG, HASHTAG_COUNT_MAX, HASHTAG_LENGTH_MAX, DESCRIPTION_LENGTH_MAX } from './constants.js';

/* Hashtag */

let hashtagErrorMessage = '';

function validateHashtag(value) {
  hashtagErrorMessage = '';

  const tags = value
    .toLowerCase()
    .trim()
    .split(/\s+/);

  if (!value.trim()) {
    return true;
  }

  if (tags.length > HASHTAG_COUNT_MAX) {
    hashtagErrorMessage = `Нельзя указать больше ${HASHTAG_COUNT_MAX} хэштегов`;
    return false;
  }

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];

    if (tag === '#') {
      hashtagErrorMessage = 'Хэштег не может состоять только из решётки';
      return false;
    }

    if (!REGEX_FOR_HASHTAG.test(tag)) {
      hashtagErrorMessage =
        'Хэштег должен начинаться с # и содержать только буквы и цифры';
      return false;
    }

    if (tag.length > HASHTAG_LENGTH_MAX) {
      hashtagErrorMessage = `Максимальная длина хэштега — ${HASHTAG_LENGTH_MAX} символов`;
      return false;
    }

    if (tags.indexOf(tag) !== i) {
      hashtagErrorMessage = 'Хэштеги не должны повторяться';
      return false;
    }
  }

  return true;
}

function getHashtagErrorMessage() {
  return hashtagErrorMessage;
}

/* Description */

function validateDescription(value) {
  return value.length <= DESCRIPTION_LENGTH_MAX;
}

/* Validation */

function initValidation(pristine, hashtag, description) {
  pristine.addValidator(hashtag, validateHashtag, getHashtagErrorMessage);

  pristine.addValidator(
    description,
    validateDescription,
    `Максимум ${DESCRIPTION_LENGTH_MAX} символов`
  );
}

export { initValidation };
