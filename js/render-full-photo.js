const bigPicture = document.querySelector('.big-picture');

const body = document.querySelector('body');

const closeBtn = bigPicture.querySelector('.cancel');

const openFullPhoto = (post) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  const fullPhoto = bigPicture.querySelector('.big-picture__img img');
  const likes = bigPicture.querySelector('.likes-count');
  const numberOfComments = bigPicture.querySelector('.comments-count');
  const commentsBlock = bigPicture.querySelector('.social__comments');
  const description = bigPicture.querySelector('.social__caption');
  const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');

  fullPhoto.src = post.url;
  likes.textContent = post.likes;
  numberOfComments.textContent = post.comments.length;
  description.textContent = post.description;

  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  commentsBlock.innerHTML = '';

  post.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatar = document.createElement('img');
    avatar.classList.add('social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    avatar.width = 35;
    avatar.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;

    commentElement.append(avatar, text);
    commentsBlock.append(commentElement);
  });
};

const closeFullPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

closeBtn.addEventListener('click', closeFullPhoto);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullPhoto();
  }
});

export { openFullPhoto, closeFullPhoto };
