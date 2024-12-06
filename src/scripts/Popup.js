export default class Popup {
  constructor(Popup) {
    this._popupElement = document.querySelector(Popup);
    this.closeButtons = this._popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    console.log("Añadiendo clase popup_opened a:", this._popupElement);
    this._popupElement.classList.add("popup-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.closeButtons.addEventListener("click", () => this.close());
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}
