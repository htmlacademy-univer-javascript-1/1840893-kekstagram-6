import { REGEX_FOR_HASHTAG } from './constants.js';

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

  if (tags.length > 5) {
    hashtagErrorMessage = 'Нельзя указать больше 5 хэштегов';
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

    if (tag.length > 20) {
      hashtagErrorMessage = 'Максимальная длина хэштега — 20 символов';
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
  return value.length <= 140;
}

/* Validation */

function initValidation(pristine, hashtag, description) {
  pristine.addValidator(hashtag, validateHashtag, getHashtagErrorMessage);

  pristine.addValidator(
    description,
    validateDescription,
    'Максимум 140 символов'
  );
}

export { initValidation };
