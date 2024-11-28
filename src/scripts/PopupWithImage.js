import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
    this.imageElement = this.popupElement.querySelector(".popup-image-big");
    this.imageText = this.popupElement.querySelector(".popup-image");
  }
  open(name, link) {
    this.imageElement.src = link;
    this.imageElement.alt = name;
    this._imageText.textContent = name;

    super.open();
  }
}
