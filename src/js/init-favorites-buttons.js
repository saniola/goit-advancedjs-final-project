import { constants } from './constants';
import { fetchFavorites } from './fetch-favorites';

let addFavoritesButton;
let removeFavoritesButton;

export function initFavoritesButtons(exerciseId) {
  addFavoritesButton = document.getElementById('addFavoritesButton');
  removeFavoritesButton = document.getElementById('removeFavoritesButton');
  addFavoritesButton.addEventListener('click', addToFavoritesModalListener);
  removeFavoritesButton.addEventListener('click', removeFromFavoritesModalListner);

  if (getExerciseDataById(exerciseId)) {
    showRemoveFavoritesButton();
  } else {
    showAddFavoritesButton();
  }
}

function parseFavoritesData() {
  const modal = document.getElementById('exerciseModal');
  const _id = modal.querySelector('#addFavoritesButton').getAttribute('data-id');
  const name = modal.querySelector('.exercise-header h2').textContent;
  const rating = Number(modal.querySelector('.rating-value').textContent);
  const target = modal.querySelector('.exercise-info .details-column:nth-child(1) .details-value').textContent;
  const bodyPart = modal.querySelector('.exercise-info .details-column:nth-child(2) .details-value').textContent;
  const burnedCaloriesText = modal.querySelector('.exercise-info .details-column:nth-child(5) .details-value').textContent;
  const burnedCalories = parseInt(burnedCaloriesText.split('/')[0]);
  const timeText = burnedCaloriesText.split('/')[1];
  const time = parseInt(timeText.split(' ')[0]);

  return {
      _id,
      name,
      burnedCalories,
      rating,
      target,
      time,
      bodyPart
  };
}

function storeExerciseData(exerciseData) {
  let favorites = getLocalStorageFavorites();
  favorites[exerciseData._id] = exerciseData;
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getExerciseDataById(id) {
  const favorites = getLocalStorageFavorites();
  return favorites[id] || null;
}

function addToFavoritesModalListener() {

  const data = parseFavoritesData();
  const favoritesRecord = getExerciseDataById(data._id);
  if (favoritesRecord == null) {
    storeExerciseData(data);
    showRemoveFavoritesButton();
  }

  if (currentPageIsFavorites()) {
    fetchFavorites({ page: 1 });
  }
}

function removeFromFavoritesModalListner() {
  let favorites = getLocalStorageFavorites();
  const exerciseId = removeFavoritesButton.dataset.id;
  if (favorites[exerciseId]) {
    delete favorites[exerciseId];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showAddFavoritesButton();
  }
}

export function removeFromFavorites(event) {
  let favorites = getLocalStorageFavorites();
  const exerciseId = event.currentTarget.getAttribute('data-id');
  if (favorites[exerciseId]) {
    delete favorites[exerciseId];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    fetchFavorites({ page: 1 });
  }
}

function showAddFavoritesButton() {
  addFavoritesButton.classList.remove('hidden');
  removeFavoritesButton.classList.add('hidden');
}

function showRemoveFavoritesButton() {
  addFavoritesButton.classList.add('hidden');
  removeFavoritesButton.classList.remove('hidden');
}

function currentPageIsFavorites() {
  return document.querySelector('body').classList.contains('js-favorites');
}

function getLocalStorageFavorites() {
  return JSON.parse(localStorage.getItem(constants.FAV_KEY)) || {};
}