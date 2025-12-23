import { renderThumbnail } from './render-thumbnails.js';
import { initForm } from './form.js';
import { getPosts } from './api.js';

getPosts().then((posts) => renderThumbnail(posts));

initForm();
