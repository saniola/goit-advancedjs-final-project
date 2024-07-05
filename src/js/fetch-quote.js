import axios from 'axios';
import { constants } from './constants';
import { showToast } from './toast';

export async function fetchQuote() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${constants.domen}/quote`,
      responseType: 'json',
    });

    return data;
  } catch (error) {
    showToast(
      'Server error',
      'Sorry, today quote was not retrieved from the server. But previous one was pretty good'
    );
    return {
      author: "Shaquille O'Neal",
      quote:
        'Excellence is not a singular act but a habit. You are what you do repeatedly.',
    };
  }
}
