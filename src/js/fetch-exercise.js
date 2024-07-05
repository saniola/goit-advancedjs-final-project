import axios from 'axios';
import { constants } from './constants';
import { showToast } from './toast';

export async function fetchExercise(id) {
  const loader = document.querySelector('.loader-text');
  loader.style.display = 'block';
  try {
    const { data } = await axios({
      method: 'get',
      url: `${constants.domen}/exercises/${id}`,
      responseType: 'json',
    });
    return data;
  } catch (error) {
    showToast(
      'error',
      'Server error',
      'Sorry, the exercise information was not retrieved from the server. Please refresh the page'
    );
  } finally {
    loader.style.display = 'none';
  }
}
