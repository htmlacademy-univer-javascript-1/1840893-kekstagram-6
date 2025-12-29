function showMessage(type) {
  const template = document
    .querySelector(`#${type}`)
    .content.querySelector(`.${type}`);
  const message = template.cloneNode(true);

  document.body.append(message);

  message.style.zIndex = '5';

  const button = message.querySelector(`.${type}__button`);

  /* Remove a message */

  function removeMessage() {
    message.remove();

    /* Deleted an event listeners */

    button.removeEventListener('click', removeMessage);
    document.removeEventListener('keydown', onEsc);
    document.removeEventListener('click', onOutsideClick);
  }

  /* Event Listeners */

  function onEsc(evt) {
    if (evt.key === 'Escape') {
      removeMessage();
    }
  }

  function onOutsideClick(evt) {
    if (!evt.target.closest(`.${type}__inner`)) {
      removeMessage();
    }
  }

  /* Added an event listeners */

  button.addEventListener('click', removeMessage);
  document.addEventListener('keydown', onEsc);
  document.addEventListener('click', onOutsideClick);
}

const showErrorMessage = (err) => {
  const body = document.body;
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('data-error');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error');
  errorMessage.textContent = err;
  errorContainer.append(errorMessage);
  body.append(errorContainer);
  return body;
};

export { showMessage, showErrorMessage };
