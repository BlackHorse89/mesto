const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__button');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.text-name');
const jobInput = formElement.querySelector('.text-job');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');

function openPopup(popup) {
  popup.classList.add('popup_open');
  if (popup === popupImage)
  popup.classList.add('popup__open_dark');
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  if (popup === popupImage)
  popup.classList.remove('popup__open_dark');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popup);
};

popupOpenButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popup);
});

popupCloseButton.addEventListener('click', function() {
  closePopup(popup);
});

formElement.addEventListener('submit', formSubmitHandler);

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
    openPopup(popupImage);
  });
  cardsElement.querySelector('.cards__like').addEventListener('click', likeCard);
  cardsElement.querySelector('.cards__delet').addEventListener('click', removeCard);
  return cardsElement;
};

initialCards.forEach(function(element) {
  cards.append(createCards(element));
});

// Активация лайков
function likeCard(event) {
  event.target.classList.toggle('cards__like_active')
};


//cards.addEventListener('click', function(event) {
  //if (event.target.classList.contains('cards__like')) {
  //event.target.classList.toggle('cards__like_active')
  //}
//});


function removeCard(event) {
  const card = event.target.closest('.cards__element');
  card.remove();
};
// попап для создания карточки
const popupPlaceOpenButton = profile.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup-place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close')

popupPlaceOpenButton.addEventListener('click', function() {
  openPopup(popupPlace);
});

popupPlaceCloseButton.addEventListener('click', function() {
  closePopup(popupPlace);
});
// Кнопка оправки карточки
const formCards = document.querySelector('.cards-form');
const placeInput = formCards.querySelector('.text-place');
const imageInput = formCards.querySelector('.text-image');

formCards.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const newCard = createCards({
    name: placeInput.value,
    link: imageInput.value
  });
  cards.prepend(newCard);
  closePopup(popupPlace);
});

const popupImage = document.querySelector('.popup-content');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupSubtitle = popupImage.querySelector('.popup__subtitle');
const popupItem = popupImage.querySelector('.popup__image');

popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});