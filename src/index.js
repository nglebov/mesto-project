import './pages/index.css';
import {
    initialCards,
    profileName, 
    profileDescription, 
    nameInput, 
    jobInput,
    popupImage,
    popupEditProfile,
    popupNewCard,
    newPlaceName,
    newPlaceLink,
    validationConfig} from "./components/utils.js";
import {openPopup, closePopup, setEventListenersPopup} from "./components/modal.js";
import {renderCards} from "./components/card.js";
import {enableValidation} from "./components/validate.js";

//отрисовка карточек из коробки
renderCards(initialCards);
//Добавление слушателей попапу изображения карточки
setEventListenersPopup(popupImage);

//реализация работы попапа с формой изменения профиля
const buttonEditProfile = document.querySelector('.profile__edit-button');
buttonEditProfile.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEditProfile)
});
setEventListenersPopup(popupEditProfile);

//функция изменения данных профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile)
}

//форма изменения профиля
const formElement = document.querySelector('.popup__form')
formElement.addEventListener('submit', handleFormSubmit);


//реализация работы попапа с формой добавления новой карточки
const newCardButton = document.querySelector('.profile__add-button');
newCardButton.addEventListener('click', () => {
    openPopup(popupNewCard)
});
setEventListenersPopup(popupNewCard);

//функция добавления карточки из формы
function addNewCard(event) {
    event.preventDefault();
    renderCards([{name: newPlaceName.value, link: newPlaceLink.value}]);
    closePopup(popupNewCard)
    newPlaceName.value = "";
    newPlaceLink.value = "";
}

//форма добавления новой карточки
const formNewCard = popupNewCard.querySelector('.popup__form');
formNewCard.addEventListener('submit', addNewCard);

//активация валидации
enableValidation(validationConfig);
