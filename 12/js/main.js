import { generatePosts } from './data.js';
import { renderThumbnail } from './render-thumbnails.js';
import { initForm } from './form.js';
import { initScale } from './scale.js';
import { initEffects } from './effects.js';

renderThumbnail(generatePosts());
initForm();
initScale();
initEffects();
