import axios from 'axios';
import { constants } from './constants';
import type { Quote } from './types';

export async function fetchQuote(): Promise<Quote> {
  const { data } = await axios({
    method: 'get',
    url: `${constants.domen}/quote`,
    responseType: 'json',
  });

  return data;
}
