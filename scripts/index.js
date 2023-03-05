//изменение профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const buttonCloseProfile = popupEditProfile.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_text_name')
const jobInput = document.querySelector('.popup__input_text_job')

nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


profileEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile)
});
buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupEditProfile)
});

//функция изменения профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile)
}

//форма изменеия профиля
let formElement = document.querySelector('.popup__form-edit')
formElement.addEventListener('submit', handleFormSubmit);


//добавление карточек из коробки
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

//контейнер для карточек
const cardsConteiner = document.querySelector('.cards__list');
//шаблон карточки
const templateCard = document.querySelector('#card-template');

//функция лайка
function likeToggle(e) {
    e.target.classList.toggle('card__like-button_active');
}
//функция удаления карточки
function handleTrash(e) {
    e.target.closest('.card').remove();
}

//попап изображения
const popupImage = document.querySelector('#popup-image-open');
const openImage = popupImage.querySelector('.popup__image');
const descriptionImage = popupImage.querySelector('.popup__image-description');

//функция открытия попапа карточки
function imageCardToggle(places) {
    openImage.src = places.link;
    descriptionImage.textContent = places.name;
    openPopup(popupImage);
}

//навешиваем слушатели на элементы карточки
function setEventListeners(card, places) {
    const likeButton = card.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeToggle);

    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleTrash);

    const cardImage = card.querySelector('.card__image');
    cardImage.addEventListener('click', () => {
        imageCardToggle(places)
    });
}

// функция создания карточки
function createCard(places) {
    const card = templateCard.content.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = places.name;
    const cardImage = card.querySelector('.card__image');
    cardImage.src = places.link;
    setEventListeners(card, places);
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
    openPopup(popupNewCard)
});
const newCardCloseButton = popupNewCard.querySelector('.popup__close-button');
newCardCloseButton.addEventListener('click', () => {
    closePopup(popupNewCard)
});

//название и место из формы новой карточки
const newPlaceName = popupNewCard.querySelector('.popup__input_place_name');
const newPlaceLink = popupNewCard.querySelector('.popup__input_place_link');

//функция добавления карточки из формы
function addNewCard(evt) {
    evt.preventDefault();
    renderCard({name: newPlaceName.value, link: newPlaceLink.value});
    closePopup(popupNewCard)
}

//слушатель события submit на форме
let formNewCard = popupNewCard.querySelector('.popup__form-edit');
formNewCard.addEventListener('submit', addNewCard);

//открытие попапа карточки
const imageCloseButton = popupImage.querySelector('.popup__close-button');
imageCloseButton.addEventListener('click', () => {
    closePopup(popupImage)
});