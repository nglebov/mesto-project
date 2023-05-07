import {
    jobInput,
    nameInput, newAvatarLink, popupEditAvatar,
    popupEditProfile,
    profileAvatar,
    profileDescription,
    profileName,
    renderLoading
} from "./utils.js";
import {closePopup} from "./modal";
import {getInitialUser, setUserAvatar, setUserInfo} from "./api";


let userId = null;
export const getUserId = () => {
    return userId;
};

//функция обновления данных профиля
export const updateUserInfo = ({name, about, avatar, _id}) => {
    userId = _id;
    profileName.textContent = name;
    profileDescription.textContent = about;
    profileAvatar.style.backgroundImage = `url(${avatar})`;
};

//функция изменения данных профиля
export function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    renderLoading(popupEditProfile, true);
    setUserInfo({
        name: nameInput.value,
        about: jobInput.value
    })
        .then((info) => {
            updateUserInfo(info);
            closePopup(popupEditProfile)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            renderLoading(popupEditProfile);
        })
}

//функция изменения аватара профиля
export function handleAvatarFormSubmit (evt) {
    evt.preventDefault();
    renderLoading(popupEditAvatar, true);
    setUserAvatar({avatar: newAvatarLink.value})
        .then((newAvatar) => {
            updateUserInfo(newAvatar);
            closePopup(popupEditAvatar)
            evt.target.reset();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            renderLoading(popupEditAvatar);
        })
}