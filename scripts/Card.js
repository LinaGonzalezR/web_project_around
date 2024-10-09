const cardTemplate = document.querySelector("#card__template").content;

export default class Card {
  constructor(name, link, templateSelector) {
    (this._name = name), (this._link = link);
  }

  _getTemplate() {
    return cardtemplate.querySelector(".card").cloneNode(true);

    /*const cardtemplate = document
      .querySelector(".card__template")
      .textContent.querySelector(".card")
      .cloneNode(true); */ //const cardTemplate =
    //querySelector("#card__template");
    /*const card = template.querySelector
    const image = card.querySelector(".card__image");
    const info = card.querySelector(".card__info");*/

    ///return cardtemplate();
  }

  toggleLike() {
    this.buttonLikeCard.classList.toggle("card__like-icon_active");
  }

  removeCard() {
    this.htmlCard.remove();
  }

  setEventListeners() {
    this.buttonLikeCard.addEventListener("click", () => {
      this.toggleLike();
    });
    this.buttonDeleteCard.addEventListener("click", () => {
      this.removeCard();
    });
  }

  /*generateCard() {
    //this._element = this._getTemplate();
    this._element.querySelector(".card__info").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;

    return this._element;
  }*/
  setProperties() {
    this.htmlCard = this.getTemplate;
    this.cardImage = this.htmlCard.querySelector(".card__image");
    this.cardTitle = this.htmlCard.querySelector(".card__title");
    this.buttonLikeCard = this.htmlCard.querySelector(".card__like");
    this.buttonDeleteCard = this.htmlCard.querySelector(".card__delete");
    this.cardTitle.textContent = this._name;
    this.cardImage.src = this._link;
  }

  getCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}

/*initialCards.forEach((item) => {
  const card = new Card(item, ".card__template");
  const cardElement = card.generateCard();

  document.body.append(cardElement);
});*/
