import Card from "./Card.js";
import FormValidation from "./FormValidator.js";
import "../pages/index.css";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import API from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

/*import valle from "../images/ValledeCocora.jpg";
import bahia from "../images/bahia-solano.jpg";
import cano from "../images/Caño-cristales.jpg";
import ciudad from "../images/CiudadPerdida.jpg";
import utria from "../images/parque-nacional-natural-utria.jpg";
import Tatacoa from "../images/Tatacoa.jpg";*/

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

const cardContainer = new Section(
  {
    items: Card,
    renderer: (item) => {
      const cardElement = createCard(
        item.name,
        item.link,
        item._id,
        item.likes,
        item.ownerId
      );
      cardContainer.addItem(cardElement);
    },
  },
  ".card__box"
);
api
  .getCards()
  .then((cards) => {
    console.log("Tarjetas Recibidas", cards);
    cardContainer._items = cards;
    cardContainer.renderer();
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

const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__subtitle",
  avatar: ".profile__image",
});

function toggleButtonLoading(button, isLoading) {
  if (isLoading) {
    button.textContent = "Guardando...";
    button.disabled = true;
  } else {
    button.textContent = "Guardar";
    button.disabled = false;
  }
}

const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  console.log(inputValues);
  const submitButton = document.querySelector("#popup-profile .button__form");
  toggleButtonLoading(submitButton, true);
  const name = inputValues.name;
  const about = inputValues.about;
  /*userInfo.setUserInfo(
    inputValues.name,
    inputValues.about,
    userInfo.getUserInfo().avatar
  );*/
  api
    .updateUserInfo(name, about)
    .then((updateData) => {
      console.log(updateData);
      userInfo.setUserInfo(
        updateData.name,
        updateData.about,
        updateData.avatar
      );
      popupProfile.close();
    })
    .catch((err) => {
      console.log("Error en usuario", err);
    })
    .finally(() => {
      toggleButtonLoading(submitButton, false);
    });
});

const popupCard = new PopupWithForm("#popup-card", (inputValues) => {
  const submitButton = document.querySelector("#popup-profile .button__form");
  toggleButtonLoading(submitButton, true);
  console.log("Datos enviados", inputValues);
  api
    .createCard(
      /*inputValues["input-name"], inputValues["input-link"]*/ inputValues.name,
      inputValues.link
    )
    .then((card) => {
      console.log("Tarjeta Creada", card);
      const newCard = createCard(
        card.name,
        card.link,
        card._id,
        card.likes,
        card.ownerId
      );
      cardContainer.addItem(newCard);
      popupCard.close();
    })
    .catch((err) => {
      console.log("Error en tarjeta", err);
    })
    .finally(() => {
      toggleButtonLoading(submitButton, false);
    });
});

function createCard(name, link, id, likes, ownerId) {
  console.log(id);
  console.log("link de la Imagen");
  const card = new Card(
    name,
    link,
    id,
    likes,
    ownerId,
    (name, link) => {
      popupImage.open(name, link);
      console.log("abriendo popup con:", name, link);
    },
    (cardElement) => {
      PopupConfirm.open(cardElement, id);
      api
        .likeCard(id)
        .then((data) => {
          console.log("Like", data);
        })
        .catch((err) => {
          console.log("Error en like", err);
        });
    }
  );
  return card.generateCard();
}

const profileAvatar = document.querySelector(".profile__image");
profileAvatar.addEventListener("mouseover", () => {
  profileAvatar.classList.add("profile__image-hover");
});
profileAvatar.addEventListener("mouseout", () => {
  profileAvatar.classList.remove("profile__image-hover");
});
profileAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

const popupAvatar = new PopupWithForm("#popup-avatar", (inputValues) => {
  const submitButton = document.querySelector("#popup-avatar .button__form");
  toggleButtonLoading(submitButton, true);
  /*const avatarUrl = inputValues.avatar;*/
  api
    .updateProfileAvatar(inputValues.avatar)
    .then((updateData) => {
      userInfo.setUserInfo(
        updateData.name,
        updateData.about,
        updateData.avatar
      );
      popupAvatar.close();
    })
    .catch((error) => {
      console.log("Error al actualizar la foto de perfil", err);
    })
    .finally(() => {
      toggleButtonLoading(submitButton, false);
    });
});

const PopupConfirm = new PopupWithConfirmation(
  "#popup__delete",
  (cardElement, id) => {
    api
      .deleteCard(id)
      .then(() => {
        cardElement.remove();
        PopupConfirm.close();
      })
      .catch((err) => {
        console.log("Error al eliminar  tarjeta", err);
      });
  }
);

const avatarForm = document.querySelector("#form-avatar");
const avatarFormValidation = new FormValidation(avatarForm, settings);
avatarFormValidation.enableValidation();

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
/*popupImage.setEventListeners();*/
popupAvatar.setEventListeners();
PopupConfirm.setEventListeners();

function setupFormValidations() {
  profileFormValidation.enableValidation();
  cardFormValidation.enableValidation();
}
setupFormValidations();

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
