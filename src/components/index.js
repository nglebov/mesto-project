import { 
    initialCards, 
    profileEditButton, 
    popupEditProfile, 
    buttonCloseProfile, 
    profileName, 
    profileDescription, 
    nameInput, 
    jobInput } from "./constants.js";
import {openPopup, closePopup, setEventListenersPopup} from "./modal.js";

//изменение профиля

profileEditButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    setEventListenersPopup(popupEditProfile);
    openPopup(popupEditProfile)
    
});
/*buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupEditProfile)
});*/

//функция изменения профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile)
}

//форма изменеия профиля
const formElement = document.querySelector('.popup__form-edit')
formElement.addEventListener('submit', handleFormSubmit);


//добавление карточек из коробки


//контейнер для карточек
const cardsConteiner = document.querySelector('.cards__list');
//шаблон карточки
const templateCard = document.querySelector('#card-template');


function handleLikeButton(e) {
    e.target.classList.toggle('card__like-button_active');
}

//функция удаления карточки
function handleTrash(e) {
    e.target.closest('.card').remove();
}

//попап изображения
const popupImage = document.querySelector('#popup-image-open');
const cardElement = popupImage.querySelector('.popup__image');
const descriptionImage = popupImage.querySelector('.popup__image-description');

//функция открытия попапа изображения
function openCardImage(places) {
    cardElement.alt = places.name;
    cardElement.src = places.link;
    descriptionImage.textContent = places.name;
    openPopup(popupImage);
}

//навешиваем слушатели на элементы карточки
function setEventListeners(card, places) {
    const likeButton = card.querySelector('.card__like-button');
    likeButton.addEventListener('click', handleLikeButton);

    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleTrash);

    const cardImage = card.querySelector('.card__image');
    cardImage.addEventListener('click', () => {
        openCardImage(places)
    });
}

// функция создания карточки
function createCard(place) {
    const card = templateCard.content.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = place.name;
    const cardImage = card.querySelector('.card__image');
    cardImage.src = place.link;
    cardImage.alt = place.name;
    setEventListeners(card, place);
    return card;
}
//функция отрисовки и добавления карточки
function renderCard(cardName) {
    cardsConteiner.prepend(createCard(cardName));
}
//цикл добавления карточек из коробки
initialCards.forEach((places) => {
    renderCard(places);
});


//форма добавления новой карточки
const popupNewCard = document.querySelector('#popup-new-card');
const newCardButton = document.querySelector('.profile__add-button');
newCardButton.addEventListener('click', () => {
    setEventListenersPopup(popupNewCard);
    openPopup(popupNewCard)
});


//название и место из формы новой карточки
const newPlaceName = popupNewCard.querySelector('.popup__input_place_name');
const newPlaceLink = popupNewCard.querySelector('.popup__input_place_link');

//функция добавления карточки из формы
function addNewCard(evt) {
    evt.preventDefault();
    renderCard({name: newPlaceName.value, link: newPlaceLink.value});
    closePopup(popupNewCard)
    newPlaceName.value = "";
    newPlaceLink.value = "";
}

//слушатель события submit на форме
const formNewCard = popupNewCard.querySelector('.popup__form-edit');
formNewCard.addEventListener('submit', addNewCard);

//закрытие попапа изображения
setEventListenersPopup(popupImage);
