import { initValidation } from './validation.js';

const uploadImg = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const closeBtn = document.querySelector('.img-upload__cancel');
const hashtag = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');

/* Validation */

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form-error-text',
});

initValidation(pristine, hashtag, description);

/* Events of form */

function openOverlay() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeOverlay() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImg.value = '';
  hashtag.value = '';
  description.value = '';
  form.reset();
  pristine.reset();
}

/* Event Listeners */

uploadImg.addEventListener('change', openOverlay);

closeBtn.addEventListener('click', closeOverlay);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeOverlay();
  }
});

hashtag.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

description.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
