import axios from 'axios';
import { constants } from './constants';
import { createPagination } from './create-pagination';
import { showSearchForm } from './show-search-form';
import { setExerciseTitle } from './set-exercise-title';

export async function handleFiltersClick(method) {
  const filterButtons = Array.from(document.querySelectorAll('.btn-filter'));

  filterButtons.forEach(button => {
    button.addEventListener('click', async() => {

      const searchForm = document.querySelector('.form-search-exersises');
      searchForm.reset();
      searchForm.classList.remove('is-hide');
      showSearchForm(false);
      setExerciseTitle('');

      if (!button.classList.contains('active')) {
        filterButtons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');

        const totalPages = await method({
          filter: button.dataset.category.replace(' ', '+'),
          page: 1,
        });

        createPagination({
          params:{filter: button.dataset.category.replace(' ', '+'),
          page: 1},
          totalPages,
          method: method,
        });
      }
    });
  });
}
