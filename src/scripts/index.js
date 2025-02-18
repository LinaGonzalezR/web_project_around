import Card from "./Card.js";
import FormValidation from "./FormValidator.js";
import "../pages/index.css";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import API from "./Api.js";

import valle from "../images/ValledeCocora.jpg";
import bahia from "../images/bahia-solano.jpg";
import cano from "../images/Caño-cristales.jpg";
import ciudad from "../images/CiudadPerdida.jpg";
import utria from "../images/parque-nacional-natural-utria.jpg";
import Tatacoa from "../images/Tatacoa.jpg";

const api = new API("https://around-api.es.tripleten-services.com/v1", {
  authorization: "84c92671-b7c6-44a0-a71f-a5067b81eea7",
  "Content-Type": "application/json",
});
console.log(api);

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data.name, data.about, data.avatar);
  })
  .catch((err) => {
    console.log("Error Info Usuario", err);
  });

api
  .getCards()
  .then((cards) => {
    console.log("Tarjetas Recibidas", cards);
    cards.forEach((card) => {
      const cardElement = createCard(card.name, card.link);
      cardContainer.addItem(cardElement);
    });
  })
  .catch((err) => {
    console.log("Error en tarjetas", err);
  });

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button__form",
  inactiveButtonClass: "button__form_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active",
};

/*const initialCards = [
  { name: "Valle de Cocora", link: valle },
  { name: "Bahía Solano", link: bahia },
  { name: "Caño Cristales", link: cano },
  { name: "Ciudad Perdida", link: ciudad },
  { name: "Parque Nacional de Utría", link: utria },
  { name: "Desierto de la Tatacoa", link: Tatacoa },
];*/

const popupImage = new PopupWithImage("#popup-image");

const cardContainer = new Section(
  {
    /*items: initialCards,*/
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link);
      cardContainer.addItem(cardElement);
    },
  },
  ".card__box"
);
cardContainer.renderer();

const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__subtitle",
  avatar: ".profile__image",
});

const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  userInfo.getUserInfo(
    inputValues.name,
    inputValues.job,
    userInfo.getUserInfo().avatar
  );
  popupProfile.close();
});

const popupCard = new PopupWithForm("#popup-card", (inputValues) => {
  const newCard = createCard(
    inputValues["input-title"],
    inputValues["input-link"]
  );
  cardContainer.addItem(newCard);
  popupCard.close();
});

function createCard(name, link) {
  console.log("link de la Imagen");
  const card = new Card(name, link, (name, link) => {
    popupImage.open(name, link);
    console.log("abriendo popup con:", name, link);
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
/*setupFormValidations();*/

const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.checkValidity()) {
      input.classList.add("form__input-valid");
      input.classList.remove("form__input-error_active");
    } else {
      input.classList.add("form__input-error_active");
      input.classList.remove("form__input-valid");
    }
  });
});
