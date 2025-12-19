import { initValidation } from './validation.js';
import { initScale } from './scale.js';
import { initEffects } from './effects.js';

function initForm() {
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
    errorTextClass: 'img-upload__error',
  });

  initValidation(pristine, hashtag, description);

  const scale = initScale();
  const effects = initEffects();

  /* Event Listeners */

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closeOverlay();
    }
  }

  function onHashtagKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  }

  function onDescriptionKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  }

  function onFormSubmit(evt) {
    if (!pristine.validate()) {
      evt.stopPropagation();
    }
  }

  /* Events of form */

  function openOverlay() {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

    scale.enable();
    effects.enable();

    /* Added Event Listeners */

    document.addEventListener('keydown', onDocumentKeydown);
    hashtag.addEventListener('keydown', onHashtagKeydown);
    description.addEventListener('keydown', onDescriptionKeydown);
    closeBtn.addEventListener('click', closeOverlay);
    form.addEventListener('submit', onFormSubmit);
  }

  function closeOverlay() {
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    uploadImg.value = '';
    hashtag.value = '';
    description.value = '';
    form.reset();
    pristine.reset();

    scale.disable();
    effects.disable();

    /* Deleted Event Listeners */

    document.removeEventListener('keydown', onDocumentKeydown);
    hashtag.removeEventListener('keydown', onHashtagKeydown);
    description.removeEventListener('keydown', onDescriptionKeydown);
    closeBtn.removeEventListener('click', closeOverlay);
    form.removeEventListener('submit', onFormSubmit);
  }

  uploadImg.addEventListener('change', openOverlay);
}

export { initForm };
