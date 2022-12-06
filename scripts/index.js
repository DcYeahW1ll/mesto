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

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;
  closePopup();
}

openEdit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);
