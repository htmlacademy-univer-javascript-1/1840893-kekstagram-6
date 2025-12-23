import { SCALE_MAX, SCALE_MIN, SCALE_STEP } from './constants.js';

const initScale = () => {
  const btnSmaller = document.querySelector('.scale__control--smaller');
  const btnBigger = document.querySelector('.scale__control--bigger');
  const scaleControl = document.querySelector('.scale__control--value');
  const previewImg = document.querySelector('.img-upload__preview img');

  let currentScale = SCALE_MAX;

  const applyScale = (value) => {
    currentScale = value;
    scaleControl.value = `${currentScale}%`;
    previewImg.style.transform = `scale(${currentScale / 100})`;
  };

  /* Event Listeners */

  const onSmallerClick = () =>
    applyScale(Math.max(SCALE_MIN, currentScale - SCALE_STEP));

  const onBiggerClick = () =>
    applyScale(Math.min(SCALE_MAX, currentScale + SCALE_STEP));

  const enable = () => {
    applyScale(SCALE_MAX);

    /* Added an event listeners */

    btnSmaller.addEventListener('click', onSmallerClick);
    btnBigger.addEventListener('click', onBiggerClick);
  };

  const disable = () => {
    applyScale(SCALE_MAX);

    /* Deleted an event listeners */

    btnSmaller.removeEventListener('click', onSmallerClick);
    btnBigger.removeEventListener('click', onBiggerClick);
  };

  return { enable, disable };
};

export { initScale };
