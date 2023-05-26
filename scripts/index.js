let popup = document.querySelector('.popup');
let popupImage = document.querySelector('.popup:has(.popup__image-container)');
let popupBio = document.querySelector('#bio');
let popupPlace = document.querySelector('#place');
let openEdit = document.querySelector('.profile__edit-button');
let openAdd = document.querySelector('.profile__add-button');
let popupOpen = document.querySelector('.popup_opened');
let popupClose = document.querySelectorAll('.popup__close');
let popupSubmit = document.querySelector('.popup__button');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let  popupHeader = document.querySelector('.popup__header');

const placeContainer = document.querySelector('.elements');
const placeImageContainer = document.querySelector('.popup__image-container');
const placeTemplate= document.querySelector('.element');

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

const placeInfo = initialCards.map(function (item){
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  Array.from(placeContainer.children).forEach(child => child.remove());
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link}) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.element__image');
  placeElement.querySelector('.element__name').textContent = name;
  placeImage.src = link;
  placeImage.setAttribute('alt', name);
  placeImage.addEventListener('click', handleImageClick);
  const cartPageItemDeleteBtn = placeElement.querySelector('.element__trash-button');
  cartPageItemDeleteBtn.addEventListener('click', handleDeleteBtn);
  placeContainer.prepend(placeElement);
  placeTemplate.remove();
}

render();

function openEditProfilePopup() {
  popup.classList.add('popup_opened');
  popupHeader.textContent = "Редактировать профиль";
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  formElement.addEventListener('submit', handleFormSubmit, {once: true});
}

function openAddCardPopup() {
  popupHeader.textContent = "Новое место";
  nameInput.placeholder = "Название";
  nameInput.value = '';
  jobInput.placeholder = "Ссылка на картинку";
  jobInput.value = '';
  jobInput.setAttribute ('maxlength', '130');
  popupSubmit.textContent = "Создать";
  popup.classList.add('popup_opened');
  formElement.addEventListener('submit', handleFormCreate, {once: true});
}

function closePopup(evt) {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value;
  closePopup(evt);
}

function handleFormCreate(evt) {
  evt.preventDefault();
  const newCard = { 
   name: nameInput.value,
   link: jobInput.value
  }
  placeInfo.push(newCard);
  renderCard(newCard);
  closePopup(evt);
}

placeContainer.addEventListener('click', (event) => {
  const target = event.target
  console.log(target)
  if (target.classList.contains('element__like-button')) {
    target.classList.toggle('element__like-button_active')
  }
});

function handleImageClick(evt) {
  openPhoto(this.src, this.getAttribute('alt'));
  
}

function handleDeleteBtn(evt) {
  const cartItem = this.closest('.element');
  cartItem.parentNode.removeChild(cartItem);
}

openEdit.addEventListener('click', openEditProfilePopup);

openAdd.addEventListener('click', openAddCardPopup);
 
[...popupClose].forEach(btn => btn.addEventListener('click', closePopup));




function openPhoto(src, name) {
  const newImage = placeImageContainer.querySelector('.popup__image-large');
  newImage.src = src;
  popupImage.classList.add('popup_opened');
  const imageName = placeImageContainer.querySelector('.popup__header');
  imageName.textContent = name;
}

function close_photo() {
  document.getElementById("big-photo").innerHTML = ""
}
