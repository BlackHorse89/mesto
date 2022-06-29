const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__button');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__container');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function closePopup() {
  popup.classList.remove('popup_open');
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);