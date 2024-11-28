export default class Popup {
  constructor(Popup) {
    this.popupElement = document.querySelector(Popup);
    this.closeButtons = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupElement.classList.add("popup-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.closeButtons.addEventListener("click", () => this.close());
    this.popupElement.addEventListener("click", (evt) => {
      if (evt.target === this.popupElement) {
        this.close();
      }
    });
  }
}
