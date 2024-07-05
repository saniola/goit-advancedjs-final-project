import axios from 'axios';
import { constants } from './constants';
import { createCategoryMarkup } from './category-card-markup';
import { showToast } from './toast';

export async function fetchCategories(params) {
  let filterParams = '?';
  const content = document.querySelector('.content');

  for (const [key, value] of Object.entries(params)) {
    filterParams += `${key}=${value}&`;
  }

  try {
    const response = await axios({
      method: 'get',
      url: `${constants.domen}/filters${filterParams}limit=${
        window.innerWidth < 768 ? 9 : 12
      }`,
      responseType: 'json',
    });

    content.innerHTML = createCategoryMarkup(response.data.results);
    return response.data.totalPages;
  } catch (error) {
    showToast(
      'error',
      'Server error',
      'Sorry, the category information was not retrieved from the server. Please refresh the page'
    );
  }
}
