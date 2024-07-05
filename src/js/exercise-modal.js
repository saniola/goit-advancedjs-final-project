import { fetchExercise } from './fetch-exercise';

const modal = document.getElementById('exerciseModal');
const closeButton = document.getElementById('closeButton');
const addFavoritesButton = document.getElementById('addFavoritesButton');
const removeFavoritesButton = document.getElementById('removeFavoritesButton');
const FAV_KEY = 'favorites';

export async function openModal(exerciseId) {
  let exerciseData;
  try {
    exerciseData = await fetchExercise(exerciseId);
    renderModal(exerciseData);
    addCloseButtonListener();
    initFavoritesButton();  
  } catch (error) {
    console.error('Error fetching exercise data:', error);
  }
  
}

function renderModal(exerciseData) {
  document.querySelector('.exercise-header h2').textContent = exerciseData.name;
  document.querySelector('.rating-value').textContent =
    exerciseData.rating.toFixed(1);
  document.querySelector('.exercise-image').src = exerciseData.gifUrl;
  document.querySelector('.exercise-image').alt = exerciseData.name;
  document.querySelector('.target-value-js').innerHTML = exerciseData.target;
  document.querySelector('.body-part-value-js').innerHTML =
    exerciseData.bodyPart;
  document.querySelector('.equipment-value-js').innerHTML =
    exerciseData.equipment;
  document.querySelector('.popularity-value-js').innerHTML =
    exerciseData.popularity;
  document.querySelector(
    '.calories-value-js'
  ).innerHTML = `${exerciseData.burnedCalories}/${exerciseData.time} min`;
  document.querySelector('.exercise-description').textContent =
    exerciseData.description;
  document.querySelector('#addFavoritesButton').dataset.id = exerciseData._id;
  document.querySelector('#removeFavoritesButton').dataset.id =
    exerciseData._id;
  renderStars(exerciseData.rating);
  showModal();
}

function renderStars(rating) {
  document.querySelectorAll('.icon-star').forEach((star, index) => {
    star.classList.toggle('empty', index >= Math.round(rating));
  });
}

function showModal() {
  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}

function addCloseButtonListener() {
  closeButton.addEventListener('click', hideModal);
  closeButton.addEventListener('click', hideModal);
}

function addToFavorites() {  
  let favorites = JSON.parse(localStorage.getItem(FAV_KEY)) ?? [];
  const exerciseId = addFavoritesButton.dataset.id;
  if (exerciseId && !favorites.includes(exerciseId)) {
    favorites.push(addFavoritesButton.dataset.id);
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    showRemoveFavoritesButton();
  }
}

function removeFromFavorites() {  
  let favorites = JSON.parse(localStorage.getItem(FAV_KEY)) ?? [];
  const exerciseId = removeFavoritesButton.dataset.id;
  if (exerciseId && favorites.includes(exerciseId)) {
    const filteredFavorites = favorites.filter(item => item !== exerciseId);
    localStorage.setItem(FAV_KEY, JSON.stringify(filteredFavorites));
    showAddFavoritesButton();
  }

}

function initFavoritesButton() {
  addFavoritesButton.addEventListener('click', addToFavorites);
  removeFavoritesButton.addEventListener('click', removeFromFavorites);
  let favorites = JSON.parse(localStorage.getItem(FAV_KEY)) ?? [];
  const exerciseId = addFavoritesButton.dataset.id;
  if (exerciseId && favorites.includes(exerciseId)) {
    showRemoveFavoritesButton();
  }
  else {
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