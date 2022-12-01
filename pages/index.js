let popup = document.querySelector('.popup');
let openEdit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');

let like = document.querySelectorAll('.element__like-button');

openEdit.onclick = function() {
  popup.style.display = 'flex';
  console.log(popup);
}

popupClose.onclick = function() {
  popup.style.display = 'none';
  console.log(popup);
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.innerHTML = nameInput.value;
  jobProfile.innerHTML = jobInput.value;
  formElement.style.visibility = 'visible';
}

formElement.addEventListener('submit', handleFormSubmit);

function likeActive (e) {
  e.target.classList.add('element__like-button_active');
}
like.forEach((el) => el.addEventListener('click', likeActive))
