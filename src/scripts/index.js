import Card from "./Card.js";
import FormValidation from "./FormValidator.js";
import "../pages/index.css";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import valle from "../images/ValledeCocora.jpg";
import bahia from "../images/bahia-solano.jpg";
import cano from "../images/Caño-cristales.jpg";
import ciudad from "../images/CiudadPerdida.jpg";
import utria from "../images/parque-nacional-natural-utria.jpg";
import Tatacoa from "../images/Tatacoa.jpg";

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button__form",
  inactiveButtonClass: "button__form_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active",
};

const initialCards = [
  { name: "Valle de Cocora", link: valle },
  { name: "Bahía Solano", link: bahia },
  { name: "Caño Cristales", link: cano },
  { name: "Ciudad Perdida", link: ciudad },
  { name: "Parque Nacional de Utría", link: utria },
  { name: "Desierto de la Tatacoa", link: Tatacoa },
];

const cardContainer = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link);
      cardContainer.addItem(cardElement);
    },
  },
  ".card__box"
);
cardContainer.renderer();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
});

const popupImage = new PopupWithImage("#popup-image");
const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  userInfo.setUserInfo(inputValues.nombre, inputValues.mi);
  popupProfile.close();
});

const popupCard = new PopupWithForm("#popup-card", (inputValues) => {
  const newCard = createCard(inputValues.title, inputValues.link);
  cardContainer.addItem(newCard);
  popupCard.close();
});

function createCard(_name, _link) {
  /*console.log("link de la Imagen", _link);*/
  const card = new Card(_name, _link, (_name, _link) => {
    popupImage.open(_name, _link);
  });
  return card.generateCard();
}

const buttonProfile = document.querySelector(".profile__button-small");
const buttonCard = document.querySelector(".profile__button");
const profileForm = document.querySelector("#form1");
const profileFormValidation = new FormValidation(profileForm, settings);
const cardForm = document.querySelector("#form2");
const cardFormValidation = new FormValidation(cardForm, settings);

buttonProfile.addEventListener("click", () => {
  popupProfile.open();
});

buttonCard.addEventListener("click", () => {
  popupCard.open();
});

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

function setupFormValidations() {
  profileFormValidation.enableValidation();
  cardFormValidation.enableValidation();
}
setupFormValidations();
