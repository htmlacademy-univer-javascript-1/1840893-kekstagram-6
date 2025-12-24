import { renderThumbnail } from './render-thumbnails.js';
import { debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');
let posts = [];
let currentFilter = 'default';

/* Cleaning the gallery */

const clearThumbnails = () => {
  document.querySelectorAll('.picture').forEach((el) => el.remove());
};

/* Using the debounce */

const renderDebounced = debounce((data) => {
  clearThumbnails();
  renderThumbnail(data);
}, 500);

const setActiveButton = (activeBtn) => {
  imgFilters.querySelectorAll('.img-filters__button').forEach((btn) => {
    btn.classList.toggle('img-filters__button--active', btn === activeBtn);
  });
};

const applyFilter = (filterType) => {
  const activeBtn = document.querySelector(`#filter-${filterType}`);
  setActiveButton(activeBtn);
  currentFilter = filterType;

  let filteredPosts;
  switch (filterType) {
    case 'random':
      filteredPosts = [...posts].sort(() => Math.random() - 0.5).slice(0, 10);
      break;
    case 'discussed':
      filteredPosts = [...posts].sort(
        (a, b) => b.comments.length - a.comments.length
      );
      break;
    default:
      filteredPosts = [...posts];
  }

  renderDebounced(filteredPosts);
};

const onFilterClick = (evt) => {
  const button = evt.target.closest('.img-filters__button');

  const filterType = button.id.replace('filter-', '');

  if (filterType === 'random' || filterType !== currentFilter) {
    applyFilter(filterType);
  }
};

function initFilters(loadedPosts) {
  posts = loadedPosts.slice();
  imgFilters.classList.remove('img-filters--inactive');

  /* Deleted the event listener */

  imgFilters.removeEventListener('click', onFilterClick);

  /* Added the event listener */

  imgFilters.addEventListener('click', onFilterClick);

  applyFilter(currentFilter);
}

export { initFilters };
