const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = ['Андрей', 'Киррил', 'Ева', 'Владимир', 'Юлия', 'Роман'];

const PICTURE_COUNT = 25;

const LIKE_MIN = 15;

const LIKE_MAX = 200;

const AVATAR_COUNT = 5;

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

const COMMENT_COUNT = 30;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomMessage = () => {
  const firstSentence = getRandomArrayElement(MESSAGE);
  return getRandomInteger(1, 2) === 1
    ? firstSentence
    : `${firstSentence} ${getRandomArrayElement(MESSAGE)}`;
};

const getPucture = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    (_, commentId) => ({
      id: commentId + 1,
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: getRandomMessage(),
      name: getRandomArrayElement(NAME),
    })
  ),
});

const picture = Array.from({ length: PICTURE_COUNT }, (_, id) =>
  getPucture(id)
);

/* eslint-disable-next-line no-console */
console.log(picture);
