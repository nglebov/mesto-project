import '../pages/index.css';
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
    newPlaceSubmit,
    validationConfig, profileAvatar, popupEditAvatar
} from "./utils.js";
import {openPopup, closePopup, setEventListenersPopup} from "./modal.js";
import {renderCards} from "./card.js";
import {enableValidation, disableButton} from "./validate.js";
import {getInitialCards, getInitialUser} from "./api.js";
import {handleAvatarFormSubmit, handleProfileFormSubmit, updateUserInfo} from "./profile.js";


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

//форма изменения профиля
const profileForm = popupEditProfile.querySelector('.popup__form')
profileForm.addEventListener('submit', handleProfileFormSubmit);


//реализация работы попапа с формой изменения аватара
profileAvatar.addEventListener('click', () => {
    openPopup(popupEditAvatar)
});
setEventListenersPopup(popupEditAvatar);

//форма изменения аватара
const avatarForm = popupEditAvatar.querySelector('.popup__form')
avatarForm.addEventListener('submit', handleAvatarFormSubmit);


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
    closePopup(popupNewCard);
    this.reset();
    disableButton(newPlaceSubmit, validationConfig);
}

//форма добавления новой карточки
const formNewCard = popupNewCard.querySelector('.popup__form');
formNewCard.addEventListener('submit', addNewCard);

//активация валидации
enableValidation(validationConfig);


Promise.all([getInitialCards(), getInitialUser()])
    .then(([cards, userData]) => {
        updateUserInfo(userData);
        renderCards(cards);
    })
    .catch((err) => {
        console.log(err)
    });




//функция изменения данных профиля
/*
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile)
}
*/