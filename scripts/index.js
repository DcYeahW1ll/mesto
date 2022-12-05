let popup = document.querySelector('.popup');
let openEdit = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup_opened');
let popupClose = document.querySelector('.popup__close');
let popupSubmit = document.querySelector('.popup__button');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let like = document.querySelectorAll('.element__like-button');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;
}

openEdit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

nameInput.value = nameProfile.textContent;

jobInput.value = jobProfile.textContent;

formElement.addEventListener('submit', handleFormSubmit);

popupSubmit.addEventListener('click', closePopup);