import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image-big");
    this._titleElement = this._popupElement.querySelector(".popup__title");
    /*this.imageText = this._popupElement.querySelector(".card__info");*/
  }
  open(name, link) {
    console.log("PopupWithImage.open llamado con:", name, link);
    if (!this._popupImage /*|| !this._popupCaption*/) {
      console.log("Elemento de imagen en el DOM.");
      return;
    }

    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._titleElement.textContent = name;
    /*this._imageText.textContent = name;*/

    super.open();
  }
}

/*setEventListeners() {
  super.setEventListeners()
};*/
