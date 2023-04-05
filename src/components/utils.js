//попап с формой изменения профиля
export const popupEditProfile = document.querySelector('#popup-edit-profile');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const nameInput = document.querySelector('.popup__input_text_name')
export const jobInput = document.querySelector('.popup__input_text_job')

export const templateCard = document.querySelector('#card-template');
export const cardsConteiner = document.querySelector('.cards__list');

//попап с формой добавления новой карточки
export const popupNewCard = document.querySelector('#popup-new-card');
export const newPlaceName = popupNewCard.querySelector('.popup__input_place_name');
export const newPlaceLink = popupNewCard.querySelector('.popup__input_place_link');
//попап изображения
export const popupImage = document.querySelector('#popup-image-open');
export const cardImage = popupImage.querySelector('.popup__image');
export const descriptionImageCard = popupImage.querySelector('.popup__image-description');

//массив с карточками
export const initialCards = [
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