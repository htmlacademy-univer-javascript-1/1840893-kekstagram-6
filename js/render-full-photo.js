const createCommentElement = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;

  li.append(avatar, text);
  return li;
};

const openFullPhoto = (post) => {
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const closeBtn = bigPicture.querySelector('.cancel');
  const commentsBlock = bigPicture.querySelector('.social__comments');
  const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const fullPhoto = bigPicture.querySelector('.big-picture__img img');
  const likes = bigPicture.querySelector('.likes-count');
  const numberOfComments = bigPicture.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  fullPhoto.src = post.url;
  likes.textContent = post.likes;
  numberOfComments.textContent = post.comments.length;
  description.textContent = post.description;

  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  commentsBlock.innerHTML = '';

  post.comments.forEach((comment) => {
    commentsBlock.append(createCommentElement(comment));
  });

  function closeFullPhoto() {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEscKeyDown);
    closeBtn.removeEventListener('click', closeFullPhoto);
  }

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeFullPhoto();
    }
  }

  document.addEventListener('keydown', onEscKeyDown);
  closeBtn.addEventListener('click', closeFullPhoto);
};

export { openFullPhoto };
