import { fetchFavorites } from './fetch-favorites';
import { openModal } from './exercise-modal';

const content = document.querySelector('.content');
const filterTabs = document.querySelector('.list-filter-exersises');

const filter = 'Muscles';
let page = 1;
let catValue = '';

document.addEventListener('DOMContentLoaded', async () => {
 
  fetchFavorites();


});
