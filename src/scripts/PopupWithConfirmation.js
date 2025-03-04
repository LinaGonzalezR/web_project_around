import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(PopupSelector, handleConfirm) {
    super(PopupSelector);
    this._handleConfirm = handleConfirm;
    this._confirmButton = this._popupElement.querySelector(".button__form");
  }

  open(cardElement, cardId) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._handleConfirm(this._cardElement, this._cardId);
    });
  }
}
