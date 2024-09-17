const buttonProfile = document.querySelector(".profile__button-small");
const popupProfile = document.querySelector(".popup");
const buttonCloseProfile = document.querySelector(".popup__close");

const buttonCard = document.querySelector(".profile__button");
const popupCard = document.querySelector(".popup__card");
const popupCloseCard = popupCard.querySelector(".popup__close");

const form = document.querySelector("#form1");
const inputName = document.querySelector("#input-nombre");
const inputAbout = document.querySelector("#input-mi");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const cardBox = document.querySelector(".card__box");
const cardTemplate = document.querySelector("#card__template").content;

const imagePopup = document.querySelector(".popup-image");
const imagePopupContent = document.querySelector(".popup__image-big");
const buttonCloseImagePopup = imagePopup.querySelector(".popup__close");

const initialCards = [
  {
    name: "Valle de Cocora",
    link: "./images/ValledeCocora.jpg",
  },
  {
    name: "Bahía Solano",
    link: "./images/bahia-solano.jpg",
  },
  {
    name: "Caño Cristales",
    link: "./images/Caño-cristales.jpg",
  },
  {
    name: "Ciudad Perdida",
    link: "./images/CiudadPerdida.jpg",
  },
  {
    name: "Parque Nacional de Utría",
    link: "./images/parque-nacional-natural-utria.jpg",
  },
  {
    name: "Desierto de la Tatacoa",
    link: "./images/Tatacoa.jpg",
  },
];

function createCard(name, link) {
  const card = cardTemplate.cloneNode(true);
  const cardElment = card.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const buttonLikeCard = card.querySelector(".card__like-icon");
  const buttonDeleteCard = card.querySelector(".card__delete");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  buttonLikeCard.addEventListener("click", function () {
    buttonLikeCard.classList.toggle("card__like-icon_active");
  });

  buttonDeleteCard.addEventListener("click", function () {
    cardElment.remove();
  });
  cardImage.addEventListener("click", function () {
    openImagePopup(cardImage.src);
  });
  cardBox.prepend(card);
}

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function handlerOpenPopupProfile() {
  popupProfile.classList.add("popup-opened");
}
function handlerOpenPopupCard() {
  popupCard.classList.add("popup-opened");
}
function handlerClosePopupProfile() {
  popupProfile.classList.remove("popup-opened");
}

function handlerClosePopupCard() {
  popupCard.classList.remove("popup-opened");
}

buttonProfile.addEventListener("click", handlerOpenPopupProfile);
buttonCard.addEventListener("click", handlerOpenPopupCard);
buttonCloseProfile.addEventListener("click", handlerClosePopupProfile);
popupCloseCard.addEventListener("click", handlerClosePopupCard);

function handlerSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  handlerClosePopupProfile();
}

form.addEventListener("submit", handlerSubmit);

const formCard = document.querySelector("#form2");
const inputTitleCard = document.querySelector("#input-title");
const inputLinkCard = document.querySelector("#input-link");

function handlerAddCard(event) {
  event.preventDefault();
  const title = inputTitleCard.value;
  const link = inputLinkCard.value;
  createCard(title, link);
  formCard.reset();
  handlerClosePopupCard();
}

formCard.addEventListener("submit", handlerAddCard);

function openImagePopup(imgsrc) {
  imagePopupContent.src = imgsrc;
  imagePopup.classList.add("popup-opened");
}

function closeImagePopup() {
  imagePopup.classList.remove("popup-opened");
  imagePopupContent.src = "";
}

buttonCloseImagePopup.addEventListener("click", closeImagePopup);

const cardImages = document.querySelectorAll(".card__image");

cardImages.forEach(function (image) {
  image.addEventListener("click", function () {
    openImagePopup(image.src);
  });
});
function openPopup(popup) {
  popup.classList.add("popup-opened");
}
function closePopup(popup) {
  popup.classList.remove("popup-opened");
}
function closePopupOverlayClick(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
}
const popoups = document.querySelectorAll(".popup");
popoups.forEach((popup) => {
  closePopupOverlayClick(popup);
});
const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}
document.addEventListener("keydown", closePopupEsc);
///function closePopup(popup) {
///popup.classList.remove("popup-opened");
///}
///function openPopup(popup) {
///  popup.classList.add("pop-opened");
///}
