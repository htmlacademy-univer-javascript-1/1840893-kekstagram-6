import { initForm } from './form.js';
import { getPosts } from './api.js';
import { initFilters } from './filters.js';

initForm();

getPosts().then(initFilters);
