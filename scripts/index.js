const popupProfile = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const formElement = popupProfile.querySelector('.popup__form');

/**добовление закрытия на кнопку Escape */
function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closeEscape);
}

function closeEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  }
}

const profileJob = profile.querySelector('.profile__subtitle');
const profileName = profile.querySelector('.profile__title');
const nameInput = formElement.querySelector('.popup__text_name');
const jobInput = formElement.querySelector('.popup__text_job');

function formSubmitProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popup);
};
formElement.addEventListener('submit', formSubmitProfile);

const popupOpenButton = profile.querySelector('.profile__button');

popupOpenButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popup);
});

const popupCloseButton = popupProfile.querySelector('.popup__close');

popupCloseButton.addEventListener('click', function() {
  closePopup(popup);
});

/** добавление функции Overlay*/
const popups = document.querySelectorAll('.popup');

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}

popups.forEach(function(popup) {
  popup.addEventListener('click', closeOverlay)
});

const cards = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards_template').content;
const popupImage = document.querySelector('.popup_type_full-image');
const popupSubtitle = popupImage.querySelector('.popup__subtitle');
const popupItem = popupImage.querySelector('.popup__image');

/**  Шаблон карточки */
function createCards(element) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const name = cardsElement.querySelector('.cards__title');
      name.textContent = element.name;
  const img = cardsElement.querySelector('.cards__image');
      img.src = element.link;
      img.alt = element.name;

  img.addEventListener('click', function(){
    popupItem.src = element.link;
    popupItem.alt = element.name;
    popupSubtitle.textContent = element.name;
    openPopup(popupImage);
  });
  cardsElement.querySelector('.cards__like').addEventListener('click', likeCard);
  cardsElement.querySelector('.cards__delet').addEventListener('click', removeCard);
  return cardsElement;
};

initialCards.forEach(function(element) {
  cards.append(createCards(element));
});

/* Активация лайков */
function likeCard(event) {
  event.target.classList.toggle('cards__like_active')
};

function removeCard(event) {
  const card = event.target.closest('.cards__element');
  card.remove();
};
/* попап для создания карточки */
const popupPlaceOpenButton = profile.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close')

popupPlaceOpenButton.addEventListener('click', function() {
  openPopup(popupPlace);
});

popupPlaceCloseButton.addEventListener('click', function() {
  closePopup(popupPlace);
});

/* Кнопка оправки карточки */
const formCards = document.querySelector('.popup__form_cards');
const placeInput = formCards.querySelector('.popup__text_place');
const imageInput = formCards.querySelector('.popup__text_image');

/**поменял названия функции submit */
function formSubmitCards (evt) {
  evt.preventDefault();
  const newCard = createCards({
    name: placeInput.value,
    link: imageInput.value
  });
  cards.prepend(newCard);
  closePopup(popupPlace);
  formCards.reset ();
  resetButton();
};

function resetButton () {
const newButton = formCards.querySelector('.popup__save');
  newButton.setAttribute('disabled', true);
  newButton.classList.add('popup__save_disabled');
}
formCards.addEventListener('submit', formSubmitCards);

const popupImageCloseButton = popupImage.querySelector('.popup__close');

popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});