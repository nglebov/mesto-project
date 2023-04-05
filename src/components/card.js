import {
    templateCard,
    cardsConteiner,
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
export function openCardImage(places) {
    cardImage.alt = places.name;
    cardImage.src = places.link;
    descriptionImageCard.textContent = places.name;
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
        cardsConteiner.prepend(createCard(card));
    });
}
