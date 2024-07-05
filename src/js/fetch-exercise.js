import axios from 'axios';
import { constants } from './constants';
import { showToast } from './toast';

export async function fetchExercise(id) {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${constants.domen}/exercises/${id}`,
      responseType: 'json',
    });
    return data;
  } catch (error) {
    showToast(
      'Server error',
      'Sorry, the exercise information was not retrieved from the server. Please refresh the page'
    );
  }
}
