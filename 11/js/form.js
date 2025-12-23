import { initValidation } from './validation.js';
import { sendData } from './api.js';
import { showMessage } from './messages.js';

function initForm() {
  const uploadImg = document.querySelector('.img-upload__input');
  const overlay = document.querySelector('.img-upload__overlay');
  const closeBtn = document.querySelector('.img-upload__cancel');
  const hashtag = document.querySelector('.text__hashtags');
  const description = document.querySelector('.text__description');
  const form = document.querySelector('.img-upload__form');
  const submitBtn = form.querySelector('.img-upload__submit');

  /* Validation */

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__error',
  });

  initValidation(pristine, hashtag, description);

  /* Events of form */

  function openOverlay() {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

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

    /* Deleted Event Listeners */

    document.removeEventListener('keydown', onDocumentKeydown);
    hashtag.removeEventListener('keydown', onHashtagKeydown);
    description.removeEventListener('keydown', onDescriptionKeydown);
    closeBtn.removeEventListener('click', closeOverlay);
    form.removeEventListener('submit', onFormSubmit);
  }

  /* Event Listeners */

  uploadImg.addEventListener('change', openOverlay);

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

  async function onFormSubmit(evt) {
    evt.preventDefault();

    if (!pristine.validate()) {
      return;
    }

    submitBtn.disabled = true;

    try {
      await sendData(new FormData(form));
      closeOverlay();
      showMessage('success');
    } catch (err) {
      showMessage('error');
    } finally {
      submitBtn.disabled = false;
    }
  }
}

export { initForm };
