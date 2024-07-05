import axios from 'axios';
import { constants } from './constants';

import { createExerciseMarkup } from './exercise-card-markup';
import { createPagination } from './create-pagination';
import { showToast } from './toast';

export async function fetchExercises(params) {
  const { category, ...searchparams } = params;

  const { keyword, page } = params;
  let filterParams = '?';
  const content = document.querySelector('.content');
  const loader = document.querySelector('.loader-text');
  loader.style.display = 'block';

  for (const [key, value] of Object.entries(params)) {
    filterParams += `${key}=${value}&`;
  }

  try {
    const { data } = await axios({
      method: 'get',
      url: `${constants.domen}/exercises${filterParams}limit=10`,
      responseType: 'json',
    });

    content.innerHTML = createExerciseMarkup(data.results);

    const titleExercise = document.querySelector('.js-title');
    const titleExerciseSlash = document.querySelector('.js-title-slash');

    titleExercise.textContent = category;
    titleExercise.classList.remove('is-hide');
    titleExerciseSlash.classList.remove('is-hide');

    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    if (data.totalPages > 1) {
      createPagination({
        params: searchparams,
        totalPages: data?.totalPages,
        method: fetchExercises,
      });
    }
  } catch (error) {
    showToast(
      'error',
      'Server error',
      'Sorry, the exercises information was not retrieved from the server. Please refresh the page'
    );
  } finally {
    loader.style.display = 'none';
  }
}
