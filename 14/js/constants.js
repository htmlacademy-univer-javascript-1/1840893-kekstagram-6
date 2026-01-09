const PICTURE_COUNT = 25;

const LIKE_MIN = 15;

const LIKE_MAX = 200;

const AVATAR_COUNT = 5;

const COMMENT_COUNT = 30;

const COMMENTS_PER_PAGE = 5;

const HASHTAG_COUNT_MAX = 5;

const HASHTAG_LENGTH_MAX = 20;

const DESCRIPTION_LENGTH_MAX = 140;

const BASE_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const SCALE_STEP = 25;

const SCALE_MIN = 25;

const SCALE_MAX = 100;

const REGEX_FOR_HASHTAG = /^#[A-Za-zА-Яа-яЁё0-9]+$/i;

const FILTERS = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const RANDOM_POSTS_COUNT = 10;
const RENDER_DELAY = 500;

const NAME = ['Андрей', 'Киррил', 'Ева', 'Владимир', 'Юлия', 'Роман'];

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Утренний туман стелется по сосновому лесу, будто кто-то включил режим «софт-фокус» для всей планеты.',
  'Гористый хребет на закате, где солнечные блики по склонам выглядят как золотая отчётность за квартал.',
  'Озеро со стеклянной гладью, отражающее небо так чётко, что хочется проверить, не двойная ли экспозиция.',
  'Пустыня на рассвете, рябь песков — как идеальный UX: минимум лишнего, максимум ясности.',
  'Водопад среди базальтовых скал, летящий вниз с той же энергией, с которой дедлайны падают на календарь.',
  'Поле лаванды под лёгким ветром — строгая симметрия и природный бренд-гайд в одном кадре.',
  'Тропический лес сверху: бесконечный зелёный плед, сотканный из крон деревьев.',
  'Северное сияние над заснеженными холмами — природный нейронный световой шоу-рум.',
  'Осенний парк с ковром желтых листьев — классика, проверенная временем, как старый рабочий процесс, который до сих пор тащит.',
  'Скальная арка над морем, где волны бьют строго по KPI приливов.',
];

const EFFECTS = {
  none: { filter: null },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    start: 1,
  },
  sepia: { filter: 'sepia', min: 0, max: 1, step: 0.1, unit: '', start: 1 },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    start: 100,
  },
  phobos: { filter: 'blur', min: 0, max: 3, step: 0.1, unit: 'px', start: 3 },
  heat: { filter: 'brightness', min: 1, max: 3, step: 0.1, unit: '', start: 3 },
};

export {
  PICTURE_COUNT,
  LIKE_MIN,
  LIKE_MAX,
  AVATAR_COUNT,
  COMMENT_COUNT,
  NAME,
  MESSAGE,
  DESCRIPTION,
  COMMENTS_PER_PAGE,
  REGEX_FOR_HASHTAG,
  HASHTAG_COUNT_MAX,
  HASHTAG_LENGTH_MAX,
  DESCRIPTION_LENGTH_MAX,
  EFFECTS,
  SCALE_MAX,
  SCALE_MIN,
  SCALE_STEP,
  BASE_URL,
  FILE_TYPES,
  FILTERS,
  RENDER_DELAY,
  RANDOM_POSTS_COUNT
};
