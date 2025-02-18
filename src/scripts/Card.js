export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this.cardElement = this._getTemplate();
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector("#card__template")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  toggleLike() {
    this.buttonLikeCard.classList.toggle("card__like-icon_active");
  }

  removeCard() {
    this.cardElement.remove();
  }

  setEventListeners() {
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this.buttonLikeCard.addEventListener("click", () => {
      this.toggleLike();
    });
    this.buttonDeleteCard.addEventListener("click", () => {
      this.removeCard();
    });
  }

  setProperties() {
    this.cardImage = this.cardElement.querySelector(".card__image");
    this.cardTitle = this.cardElement.querySelector(".card__title");
    this.buttonLikeCard = this.cardElement.querySelector(".card__like-icon");
    this.buttonDeleteCard = this.cardElement.querySelector(".card__delete");

    /*this.cardElement = this.cardElement.querySelector(".card");
    console.log("this.buttonLikeCard");*/

    this.cardTitle.textContent = this._name;
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this.cardElement;
  }
}
