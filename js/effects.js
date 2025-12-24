import { EFFECTS, FILE_TYPES } from './constants.js';

const initEffects = () => {
  const effectsList = document.querySelector('.effects__list');
  const sliderContainer = document.querySelector('.img-upload__effect-level');
  const slider = sliderContainer.querySelector('.effect-level__slider');
  const previewImg = document.querySelector('.img-upload__preview img');
  const effectValue = sliderContainer.querySelector('.effect-level__value');

  let currentEffect = 'none';

  sliderContainer.classList.add('hidden');

  /* Create a new slider */

  if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
      range: { min: 0, max: 100 },
      start: 100,
      step: 1,
      connect: 'lower',
    });
  }

  const applyEffect = (value) => {
    const effect = EFFECTS[currentEffect];
    effectValue.value = value;

    if (!effect.filter) {
      previewImg.style.filter = '';
      return;
    }

    previewImg.style.filter = `${effect.filter}(${value}${effect.unit})`;
  };

  const onSliderUpdate = (value) => {
    applyEffect(Number(value));
  };

  const onEffectChange = (evt) => {
    currentEffect = evt.target.value;
    const effect = EFFECTS[currentEffect];

    /* For an original filter */

    if (!effect.filter) {
      sliderContainer.classList.add('hidden');
      previewImg.style.filter = '';
      effectValue.value = 100;
      return;
    }

    sliderContainer.classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      range: { min: effect.min, max: effect.max },
      step: effect.step,
      start: effect.start,
    });
    applyEffect(effect.start);
  };

  const enable = () => {
    slider.noUiSlider.on('update', onSliderUpdate);
    effectsList.addEventListener('change', onEffectChange);
  };

  const disable = () => {
    slider.noUiSlider.off('update', onSliderUpdate);
    effectsList.removeEventListener('change', onEffectChange);
    sliderContainer.classList.add('hidden');
    previewImg.style.filter = '';
    effectValue.value = 100;
    currentEffect = 'none';
  };

  return { enable, disable };
};

/* Applying the uploaded image  */

const fileInput = document.querySelector('.img-upload__start input[type=file]');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const thumbnailsEffects = document.querySelectorAll('.effects__preview');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const matches = FILE_TYPES.some((type) =>
    file.name.toLowerCase().endsWith(type)
  );
  if (matches) {
    const imageUrl = URL.createObjectURL(file);

    uploadPreviewImg.src = imageUrl;

    thumbnailsEffects.forEach((thumbnail) => {
      thumbnail.style.backgroundImage = `url(${imageUrl})`;
    });
  }
});

export { initEffects };
