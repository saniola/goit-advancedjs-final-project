import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showToast(header, message) {
  iziToast.error({
    title: header,
    message
  });
}
