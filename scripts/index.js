const popup = document.querySelector('#popup');
const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__button');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector('#form');
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
};

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cards = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;

// Шаблон карточки
function createCards(element) {
  const cardsElement = cardsTemplate.cloneNode(true);

  const name = cardsElement.querySelector('.cards__title')
      name.textContent = element.name;
  const img = cardsElement.querySelector('.cards__image')
      img.src = element.link;
      img.alt = element.name;

  img.addEventListener('click', function(){
    popupItem.src = element.link;
    popupSubtitle.textContent = element.name;
    popupImageOpen();
  });
  cardsElement.querySelector('.cards__delet').addEventListener('click', removeCard);
  return cardsElement;
};

initialCards.forEach(function(element) {
  cards.append(createCards(element));
});

// Активация лайков
cards.addEventListener('click', function(event) {
  if (event.target.classList.contains('cards__like')) {
  event.target.classList.toggle('cards__like_active')
  }
});

function removeCard(event) {
  const card = event.target.closest('.cards__element');
  card.remove();
};
// попап для создания карточки
const popupPlaceOpenButton = profile.querySelector('.profile__add-button');
const popupPlace = document.querySelector('#add-place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close')

function openPopupPlace () {
  popupPlace.classList.add('popup_open')
};

function closePopupPlace () {
  popupPlace.classList.remove('popup_open')
};

popupPlaceOpenButton.addEventListener('click', openPopupPlace);
popupPlaceCloseButton.addEventListener('click', closePopupPlace);
// Кнопка оправки карточки
const formCards = document.querySelector('#cards-form');
const placeInput = formCards.querySelector('#place');
const imageInput = formCards.querySelector('#image');

formCards.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const newCard = createCards({
    name: placeInput.value,
    link: imageInput.value
  });
  console.log(newCard)
  cards.prepend(newCard);
  closePopupPlace();
});

const popupImage = document.querySelector('#popup-image');
const popupImageOpenTarget = cards.querySelector('.cards__image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupSubtitle = popupImage.querySelector('.popup__subtitle');
const popupItem = popupImage.querySelector('.popup__image');

function popupImageOpen() {
  popupImage.classList.add('popup__open_dark')
};

function popupImageClose() {
  popupImage.classList.remove('popup__open_dark')
};

popupImageCloseButton.addEventListener('click', popupImageClose);