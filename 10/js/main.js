import { generatePosts } from './data.js';
import { renderThumbnail } from './render-thumbnails.js';
import { initForm } from './form.js';

renderThumbnail(generatePosts());
initForm();
