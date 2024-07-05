import { fetchFavorites } from './fetch-favorites';
import { constants } from './constants';
import { openModal } from './exercise-modal';

document.addEventListener('DOMContentLoaded', async () => {
  fetchFavorites({ page: 1 });
});

export function initFavoritesButtons() {
  addFavoritesButton.addEventListener('click', addToFavorites);
  removeFavoritesButton.addEventListener('click', removeFromFavorites);
  let favorites = JSON.parse(localStorage.getItem(constants.FAV_KEY)) ?? [];
  const exerciseId = addFavoritesButton.dataset.id;
  if (exerciseId && favorites.includes(exerciseId)) {
    showRemoveFavoritesButton();
  } else {
    showAddFavoritesButton();
  }
}

function addToFavorites() {
  let favorites = JSON.parse(localStorage.getItem(constants.FAV_KEY)) ?? [];
  const exerciseId = addFavoritesButton.dataset.id;
  if (exerciseId && !favorites.includes(exerciseId)) {
    favorites.push(addFavoritesButton.dataset.id);
    localStorage.setItem(constants.FAV_KEY, JSON.stringify(favorites));
    showRemoveFavoritesButton();
  }
}

function removeFromFavorites() {
  let favorites = JSON.parse(localStorage.getItem(constants.FAV_KEY)) ?? [];
  const exerciseId = removeFavoritesButton.dataset.id;
  if (exerciseId && favorites.includes(exerciseId)) {
    const filteredFavorites = favorites.filter(item => item !== exerciseId);
    localStorage.setItem(constants.FAV_KEY, JSON.stringify(filteredFavorites));
    showAddFavoritesButton();
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
