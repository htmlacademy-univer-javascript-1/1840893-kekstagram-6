import { openFullPhoto } from './render-full-photo.js';

const renderThumbnail = (genetarePosts) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  genetarePosts.forEach((post) => {
    const pictureElement = pictureTemplate
      .querySelector('.picture')
      .cloneNode(true);

    const img = pictureElement.querySelector('.picture__img');
    const likes = pictureElement.querySelector('.picture__likes');
    const comments = pictureElement.querySelector('.picture__comments');

    img.src = post.url;
    img.alt = post.description;
    likes.textContent = post.likes;
    comments.textContent = post.comments.length;
    pictureElement.addEventListener('click', () => openFullPhoto(post));
    fragment.append(pictureElement);
  });

  picturesContainer.append(fragment);
};

export { renderThumbnail };
