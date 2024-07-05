import { createPagination } from './create-pagination';
import { fetchAndSetQuote } from './fetch-and-set-quote';
import { fetchCategories } from './fetch-categories';
import { handleFiltersClick } from './handle-filters-click';
import { fetchExercises } from './fetch-exercises';
import { openModal } from './exercise-modal';

import { setExerciseTitle } from './set-exercise-title';
import './handle-email-form';

const searchForm = document.querySelector('.form-search-exersises');
const content = document.querySelector('.content');
const filterTabs = document.querySelector('.list-filter-exersises');
const loader = document.querySelector('.loader-start');
loader.style.display = 'block';

const filter = 'Muscles';
let page = 1;
let catValue = '';

document.addEventListener('DOMContentLoaded', async () => {
  loader.style.display = 'none';

  const method = fetchCategories;
  fetchAndSetQuote();
  // if (isExcercisesPage) {
  //   method = fetchExcercises;
  // }
  handleFiltersClick(method);

  const totalPages = await method({
    filter,
    page,
  });

  if (totalPages > 1) {
    createPagination({
      params: { filter, page },
      totalPages,
      method: fetchCategories,
    });
  }
});

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const category = document.querySelector('.btn-filter.active').dataset.exercise;

  const totalPages = await fetchExercises({
    [category]: catValue,
    category,
    keyword,
    page,
  });
  attachExerciseModalListeners();
});

searchForm.addEventListener('reset', async e => {
  e.preventDefault();
  e.target.querySelector('.input-search-exersises').value = '';
  await fetchExercises({
    value: catValue,
    page,
  });
  attachExerciseModalListeners();
});

content.addEventListener('click', async e => {
  const item = e.target.closest('.category-wrap');
  if (!item) return;
  searchForm.classList.remove('is-hide');
  catValue = item.getAttribute('name');
  const category = document.querySelector('.btn-filter.active').dataset.exercise;

  const totalPages = await fetchExercises({
    [category]: catValue,
    category,
    keyword,
    page,
  });
  attachExerciseModalListeners();
});

document.querySelector('.toggle-btn-home').classList.add('active');
document.querySelector('.toggle-btn-favorites').classList.remove('active');

function attachExerciseModalListeners() {
  const modalExerciseInfoButtons = document.querySelectorAll('.modal-exercise-info');
  modalExerciseInfoButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal(button.id);
    });
  });
}
