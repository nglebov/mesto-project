import {
    templateCard,
    cardsContainer,
    popupImage,
    cardImage,
    descriptionImageCard} from "./utils.js";
import {openPopup} from "./modal.js";

//функция удаления карточки
export function handleTrash(e) {
    e.target.closest('.card').remove();
}

//функция лайка карточки
export function handleLikeButton(e) {
    e.target.classList.toggle('card__like-button_active');
}

// Функция получения шаблона карточки
function cloneTemplateCard() {
    return templateCard.content.querySelector('.card').
    cloneNode(true);
}

//функция открытия попапа изображения карточки
export function openCardImage(place) {
    cardImage.alt = place.name;
    cardImage.src = place.link;
    descriptionImageCard.textContent = place.name;
    openPopup(popupImage);
}

//навешиваем слушатели на элементы карточки
function setEventListeners(card, place) {
    const likeButton = card.querySelector('.card__like-button');
    likeButton.addEventListener('click', handleLikeButton);
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleTrash);
    const cardImage = card.querySelector('.card__image');
    cardImage.addEventListener('click', () => {
        openCardImage(place)
    });
}

// функция создания карточки
export function createCard(place) {
    const card = cloneTemplateCard();
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = place.name;
    const cardImage = card.querySelector('.card__image');
    cardImage.src = place.link;
    cardImage.alt = place.name;
    setEventListeners(card, place);
    return card;
}

//функция отрисовка карточек в контейнере
export function renderCards(cardsList) {
    cardsList.forEach((card) => {
        cardsContainer.prepend(createCard(card));
    });
}
